'use client'

const stylists = [
  {
    name: 'Emma Thompson',
    role: 'Celebrity Stylist',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'With over 10 years of experience styling A-list celebrities, Emma brings her expertise to create unforgettable looks.',
  },
  {
    name: 'Marcus Chen',
    role: 'Personal Stylist',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Specializing in contemporary luxury fashion, Marcus helps clients discover and refine their personal style.',
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Fashion Consultant',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Sofia's eye for emerging trends and timeless classics helps create versatile wardrobes for busy professionals.',
  },
]

export function StylistShowcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Expert Stylists</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Work with world-class stylists who understand your unique style and help you create the perfect wardrobe.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {stylists.map((stylist) => (
            <li key={stylist.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={stylist.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{stylist.name}</h3>
              <p className="text-base leading-7 text-indigo-600">{stylist.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{stylist.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
