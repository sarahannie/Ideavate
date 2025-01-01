import React from 'react'
import Image from 'next/image'
import rock from "@/public/rocket-coins.png"

const Howitwork = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green to-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  How ideavate Works?
                </h3>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Crowdfunding System with Expert Ranking
                </h2>
              </div>
              <div className="md:w-1/2 ml-10">
                <Image
                  src={rock}
                  alt="How it works"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Howitwork