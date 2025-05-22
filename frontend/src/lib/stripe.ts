import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

export const createCheckoutSession = async ({
  priceId,
  quantity = 1,
  metadata = {},
}: {
  priceId: string
  quantity?: number
  metadata?: Record<string, string>
}) => {
  try {
    const response = await fetch('/api/checkout/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        quantity,
        metadata,
      }),
    })

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.message)
    }

    return data.sessionId
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export const createPaymentIntent = async ({
  amount,
  currency = 'usd',
  metadata = {},
}: {
  amount: number
  currency?: string
  metadata?: Record<string, string>
}) => {
  try {
    const response = await fetch('/api/payment/intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        metadata,
      }),
    })

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.message)
    }

    return data.clientSecret
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw error
  }
}
