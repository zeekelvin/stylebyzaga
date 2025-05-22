import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const supabase = createRouteHandlerClient({ cookies })

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const { userId } = session.metadata || {}

        if (!userId) {
          console.error('No user ID in session metadata')
          return NextResponse.json({ error: 'No user ID found' }, { status: 400 })
        }

        // Update order status in database
        const { error } = await supabase
          .from('orders')
          .update({ status: 'processing', payment_intent_id: session.payment_intent as string })
          .eq('user_id', userId)
          .eq('status', 'pending')
          .single()

        if (error) {
          console.error('Error updating order:', error)
          return NextResponse.json({ error: 'Error updating order' }, { status: 500 })
        }

        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const { userId } = paymentIntent.metadata

        if (!userId) {
          console.error('No user ID in payment intent metadata')
          return NextResponse.json({ error: 'No user ID found' }, { status: 400 })
        }

        // Update appointment or order status based on metadata
        if (paymentIntent.metadata.type === 'appointment') {
          const { error } = await supabase
            .from('appointments')
            .update({ status: 'confirmed', payment_intent_id: paymentIntent.id })
            .eq('user_id', userId)
            .eq('status', 'pending')
            .single()

          if (error) {
            console.error('Error updating appointment:', error)
            return NextResponse.json(
              { error: 'Error updating appointment' },
              { status: 500 }
            )
          }
        }

        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const { userId } = paymentIntent.metadata

        if (!userId) {
          console.error('No user ID in payment intent metadata')
          return NextResponse.json({ error: 'No user ID found' }, { status: 400 })
        }

        // Update appointment or order status based on metadata
        if (paymentIntent.metadata.type === 'appointment') {
          const { error } = await supabase
            .from('appointments')
            .update({ status: 'cancelled', payment_intent_id: paymentIntent.id })
            .eq('user_id', userId)
            .eq('status', 'pending')
            .single()

          if (error) {
            console.error('Error updating appointment:', error)
            return NextResponse.json(
              { error: 'Error updating appointment' },
              { status: 500 }
            )
          }
        }

        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Error processing webhook' },
      { status: 500 }
    )
  }
}
