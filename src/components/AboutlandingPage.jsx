import React from 'react'
import Image from 'next/image'
import frame from '@/public/Frame.png'

const AboutlandingPage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold text-green mb-4">
                About ideavate
              </h3>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Empowering <span className='text-green'>Ideas</span> &
                <span className='text-green'> Connecting </span>Innovators
                and Investors
              </h2>
              <button  variant="outline" size="lg" className="mt-6 hover:text-green">
                Read More
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={frame}
                alt="About Ideavate"
                width={540}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
    </section>
  )
}

export default AboutlandingPage