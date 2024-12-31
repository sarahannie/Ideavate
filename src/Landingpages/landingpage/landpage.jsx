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
import {FaDribbble, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaExpandAlt, FaInvision }from "react-icons/fa"
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
      <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-green">
      About ideavate?
      </h3>
      <h1 className="mb-8 text-dark sm:text-6xl text-4xl leading-relaxed">
     
Empowering <span className='text-green'>Ideas</span>  &
<span className='text-green'> Connecting </span>Innovators
and Investors
      </h1>
      <div className="flex justify-center">
        <a href='' className="inline-flex text-dark border-0 py-2 px-6 focus:outline-none hover:text-green rounded text-lg">
          Read More
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={frame}
      />
    </div>
  </div>
</section>

{/* Our team */}
<div className="p-20">
  <div className="text-center mb-16">
    
    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        Meet Our Team
    </h3>
    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
    Lorem ipsum dolor sit amet consectetur. Id odio sed at sodales elit. Libero sed tellus tellus condimentum ut volutpat. At id arcu arcu scelerisque. Sit
    </p>
  </div>
  <div className="sm:grid grid-cols-2 md:grid-cols-4 col-gap-6 mx-auto">
    <div className="text-start">
      <a href="#">
        <Image
          alt="team"
          className="mb-3 rounded-small "
          width={300}
          height={300}
          src={team}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start   text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
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
          width={300}
          height={300}
          src={team2}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start   text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
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
          width={300}
          height={300}
          src={team3}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start  text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
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
          width={300}
          height={300}
          src={team4}
        />
      </a>
      <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
        john doe
      </a>
      <h3 className="text-green  uppercase text-sm">CEO Founder</h3>
      <p className="text-gray-500 text-start  text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
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
<section className=" body-font bg-gradient-to-l from-green to-white ">
  <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-green">
      How ideavate Works?
      </h3>
      <h1 className="mb-8 text-dark sm:text-6xl text-4xl leading-relaxed">
      Crowdfunding System with Expert Ranking
      </h1>

    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="rock"
        alt="hero"
        src={rock}
        width={300}
      />
    </div>
  </div>
</section>
{/* Innovate */}
<section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-green rounded-full">
                <section.Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              <p className="mb-4">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className='bg-black text-white py-2 rounded-md px-4'>Read More</button>
        </div>
      </div>
  </section>
  {/* feature */}
  <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-green to-white text-transparent bg-clip-text">
            Features
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Cutting-edge features for advanced analytics
          </h3>
          <p className="text-gray-600 text-lg">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Image
            src={content}
            alt="Phone and Dashboard Interface"
            width={900}
            height={700}
            className="rounded-lg shadow-xl"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div> */}
        </div>
      </div>
    </section>

    {/* action item */}
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-green">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Competitive Landscape */}
          <div>
            <h2 className="text-2xl md:text-4xl text-green font-bold mb-4">
              Competitive Landscape
            </h2>
            <p className="text-gray-700 text-x mb-4">
              Traditional Crowdfunding Platforms lack expert validation, leading to higher risks for investors
            </p>
            
          </div>

          {/* Our Solution */}
          <div>
            <h2 className="text-2xl md:text-4xl text-green font-bold mb-4 text-green-600">
              Our Solution
            </h2>
            <p className="text-gray-700 text-x mb-4">
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
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message Us</label>
                <textarea id="message" placeholder="Your message here..." />
              </div>
              <div className="flex items-center space-x-2">
                <checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="w-full">Send Message</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Beautiful girl"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Landpage