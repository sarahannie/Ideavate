import React from 'react'

const Action = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white to-green py-20 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green mb-4">
              Competitive Landscape
            </h2>
            <p className="text-gray-700 text-lg">
              Traditional Crowdfunding Platforms lack expert validation, leading to higher risks for investors.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green mb-4">
              Our Solution
            </h2>
            <p className="text-gray-700 text-lg">
              Combines expert-led vetting and scalable crowdfunding, bridging the gap between trust and accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Action