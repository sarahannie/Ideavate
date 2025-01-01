import React from 'react'
import Image from 'next/image'
import team from "@/public/Team (1).png"
import team2 from "@/public/Team (2).png"
import team3 from "@/public/Team (3).png"
import team4 from "@/public/Team (4).png"
import {FaDribbble, FaLinkedin, FaTwitter}from "react-icons/fa"

const Team = () => {
  return (
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
  )
}

export default Team