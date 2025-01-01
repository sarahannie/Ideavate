'use client'
import Image from 'next/image'
import React from 'react'
import car from '@/public/update.png'
import frame from '@/public/Frame.png'
import team from "@/public/Team (1).png"
import team2 from "@/public/Team (2).png"
import team3 from "@/public/Team (3).png"
import team4 from "@/public/Team (4).png"
import rock from "@/public/rocket-coins.png"
import content from "@/public/Content.png"
import contact from "@/public/contect.png"
import {FaDribbble, FaLinkedin, FaTwitter, FaEnvelope, FaExpandAlt, FaInvision }from "react-icons/fa"
import { Input } from 'postcss'

const Landpage = () => {
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
    <>
  <div className="flex flex-col items-center justify-center">
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
    
{/* About Section */}
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

{/* Our team */}
<div  className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center mb-16">
    
    <h3 className="text-3xl sm:text-4xl font-bold mb-4">
        Meet Our Team
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto">
    Our diverse team of experts is dedicated to revolutionizing the way ideas are funded and brought to life.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
    <div className="text-start">
      <a href="#">
        <Image
          alt="team"
          className="mb-3 rounded-small "
          width={250}
          height={250}
          src={team}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start w-[270px]  text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
      <div className="my-4 flex justify-start items-center">
        <a href="#" className='pr-3'>
        <FaTwitter className='w-6 h-6 flex  text-gray-500' />
        </a>
        <a href="#" className='pr-3'>
          <FaLinkedin className='w-6 h-6 flex gap-3 text-gray-500'/>
        </a>
        <a href="#" className='pr-3'>
          <FaDribbble className='w-6 h-6 flex gap-3 text-gray-500' />
        </a>
      </div>
    </div>
    <div className="text-start">
      <a href="#">
        <Image
          alt="team"
          className="mb-3 rounded-small "
          width={250}
          height={300}
          src={team2}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start w-[270px]  text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
      <div className="my-4 flex justify-start items-center">
        <a href="#" className='pr-3'>
        <FaTwitter className='w-6 h-6 flex  text-gray-500' />
        </a>
        <a href="#" className='pr-3'>
          <FaLinkedin className='w-6 h-6 flex gap-3 text-gray-500'/>
        </a>
        <a href="#" className='pr-3'>
          <FaDribbble className='w-6 h-6 flex gap-3 text-gray-500' />
        </a>
      </div>
    </div>
    <div className="text-start">
      <a href="#">
        <Image
          alt="team"
          className="mb-3 rounded-small "
          width={250}
          height={300}
          src={team3}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start w-[270px]  text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
      <div className="my-4 flex justify-start items-center">
        <a href="#" className='pr-3'>
        <FaTwitter className='w-6 h-6 flex  text-gray-500' />
        </a>
        <a href="#" className='pr-3'>
          <FaLinkedin className='w-6 h-6 flex gap-3 text-gray-500'/>
        </a>
        <a href="#" className='pr-3'>
          <FaDribbble className='w-6 h-6 flex gap-3 text-gray-500' />
        </a>
      </div>
    </div>
    <div className="text-start">
      <a href="#">
        <Image
          alt="team"
          className="mb-3 rounded-small "
          width={250}
          height={300}
          src={team4}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start w-[270px]  text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
      <div className="my-4 flex justify-start items-center">
        <a href="#" className='pr-3'>
        <FaTwitter className='w-6 h-6 flex  text-gray-500' />
        </a>
        <a href="#" className='pr-3'>
          <FaLinkedin className='w-6 h-6 flex gap-3 text-gray-500'/>
        </a>
        <a href="#" className='pr-3'>
          <FaDribbble className='w-6 h-6 flex gap-3 text-gray-500' />
        </a>
      </div>
    </div>
  </div>
</div>

{/* How it works */}
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
{/* Innovate */}
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
  {/* feature */}
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

    {/* action item */}
    <section className="w-full bg-gradient-to-br from-white to-green py-20">
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
    {/* contact us */}
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-bold mb-3 ml-3">Get in touch</h2>
            <h4 className='ml-3'>Our friendly team would love to hear from you.</h4>
            <form className="mx-auto mt-6 max-w-xl sm:mt-6">
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    <div>
      <label
        htmlFor="first-name"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        First name
      </label>
      <div className="mt-2.5">
        <input
          required=""
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          placeholder="Your First Name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div>
      <label
        htmlFor="last-name"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Last name
      </label>
      <div className="mt-2.5">
        <input
          required=""
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          placeholder="Your Last Name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label
        htmlFor="company"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Company
      </label>
      <div className="mt-2.5">
        <input
          required=""
          type="text"
          name="company"
          id="company"
          autoComplete="organization"
          placeholder="Your Company Name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label
        htmlFor="email"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="mt-2.5">
        <input
          required=""
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Your Email Address"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label
        htmlFor="phone"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Phone number
      </label>
      <div className="mt-2.5">
        <input
          required=""
          type="tel"
          name="phone"
          id="phone"
          autoComplete="tel"
          placeholder="Your Phone Number"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label
        htmlFor="message"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Message
      </label>
      <div className="mt-2.5">
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Share your thoughts..."
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  </div>
  <div className="mt-10">
    <button
      type="submit"
      className="bg-black text-white rounded-sm py-2 w-full block"
    >
      Submit →
    </button>
  </div>
</form>

          </div>

          {/* Image Section */}
          <div className="relative h-[800px]">
            <Image
              src={contact}
              alt="Beautiful girl"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Landpage