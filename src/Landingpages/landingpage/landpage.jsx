import Image from 'next/image'
import React from 'react'
import car from '@/public/update.png'

const Landpage = () => {
  return (
    <>
   
  
  {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}
  <div className="pt-12 sm:pt-18 lg:pt-16">
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
      Share Your <span className="text-green">Ideas,</span> Get Ranked by <span className="text-green">Experts,</span> Attract <span className="text-green">Investment</span>
    </h1>
    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
      Crowdfunding for Innovation Empowering Ideas, Connecting Innovators and Investors.
    </p>
    <div className="mt-20 flex items-center justify-center gap-x-6">
      <a
        href="#"
        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit Your Idea
      </a>
    </div>
  </div>
</div>
{/* Trust Section */}
<div className="py-2 sm:py-8 lg:py-6 mt-12 w-auto mx-20 rounded-md bg-gradient-to-l from-green to-white">
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
    
  {/* </div> */}
 


    </>
  )
}

export default Landpage