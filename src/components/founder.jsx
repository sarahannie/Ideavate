import React from 'react'
import car from '@/public/update.png'
import Image from 'next/image'

const Founder = () => {
  return (
    <div className="py-2 sm:py-8 lg:py-6 mt-12 w-auto px-16 rounded-md bg-gradient-to-l from-green to-white">
      <div className="text-pretty text-lg font-medium text-white sm:text-xl text-center py-8">
        Trusted by next gen founders from
      </div>
      <Image
        src={car}
        alt="logos"
        width={900}
        height={500}
        className="mx-auto"
      />
    </div>
  )
}

export default Founder