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
    
{/* About Section */}
<section className=" body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green">
      About ideavate?
      </h3>
      <h1 className="mb-8 text-dark sm:text-6xl text-4xl leading-relaxed">
     
Empowering <span className='text-green'>Ideas</span>  &
<span className='text-green'> Connecting </span>Innovators
and Investors
      </h1>
      <div className="flex justify-center">
        <a href='' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Read More
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </div>
  </div>
</section>
 


    </>
  )
}

export default Landpage