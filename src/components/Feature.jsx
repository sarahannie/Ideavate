import React from 'react'
import Image from 'next/image'
import content from "@/public/Content.png"

const Feature = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-green to-white text-transparent bg-clip-text">
              Features
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Cutting-edge features for advanced analytics
            </h3>
            <p className="text-gray-600 text-lg">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <Image
            src={content}
              alt="Features Dashboard"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </section>
  )
}

export default Feature