'use client'

const brands = [
  {
    name: 'Louis Vuitton',
    imageUrl: '/brands/louis-vuitton.svg',
  },
  {
    name: 'Gucci',
    imageUrl: '/brands/gucci.svg',
  },
  {
    name: 'Hermès',
    imageUrl: '/brands/hermes.svg',
  },
  {
    name: 'Chanel',
    imageUrl: '/brands/chanel.svg',
  },
  {
    name: 'Prada',
    imageUrl: '/brands/prada.svg',
  },
  {
    name: 'Cartier',
    imageUrl: '/brands/cartier.svg',
  },
]

export function LuxuryBrands() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world's most prestigious luxury brands
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand.name} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <img
                className="h-12"
                src={brand.imageUrl}
                alt={brand.name}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
