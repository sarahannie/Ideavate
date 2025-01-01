import React from 'react'
import {FaEnvelope, FaExpandAlt, FaInvision }from "react-icons/fa"

const Innovate = () => {
    const sections = [
        {
          title: "Innovator",
          description: "A platform where innovators can submit their ideas and get them ranked by industry experts.",
          Icon: FaEnvelope, 
        },
        {
          title: "Experts",
          description: "The top-ranked ideas are highlighted to attract investment from angel investors, venture capitalists, and crowdfunding backers",
          Icon: FaExpandAlt
        },
        {
          title: "Investors",
          description: "Experts’ evaluations enhance idea credibility, reducing the risk for investors while amplifying the chances of good ideas getting funded.",
          Icon : FaInvision
        }
      ]
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 p-4 bg-green rounded-full">
              <section.Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
            <p className="text-gray-600 mb-4">{section.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button size="lg" className="bg-black text-white hover:bg-green px-4 py-2 rounded-md">
          Read More
        </button>
      </div>
    </section>
  )
}

export default Innovate