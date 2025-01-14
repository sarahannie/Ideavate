'use client'
import React from 'react'
import { StatCard } from '../components/Statecard'
import { FaClock, FaLightbulb, FaTrophy } from 'react-icons/fa'
import Image from 'next/image'
import rock from "@/public/rocket-coins.png"
import { useUser } from '@/app/context/user'



export const Home = () => {
  
 const { user } = useUser();
 console.log(user);
    
  return (
    <>
         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-900">Welcome back, Annie</h1>
            <p className="mt-2 text-gray-600">Track and manage all your ideas submitted</p>
            
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StatCard title="Total Ideas" value="2" change="8.5%"icon={FaLightbulb} />
              <StatCard title="Waiting Ideas" value="1" icon={FaClock} />
              <StatCard title="Ranked Ideas" value="1" icon={FaTrophy} />
            </div>
          </div>
          <section className=" container w-full bg-gradient-to-r from-green to-white py-9 rounded-lg mx-5 px-3 mb-5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                          <h3 className="text-2xl font-semibold text-white mb-4">
                            Submit Your Idea
                          </h3>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                            Crowdfunding System with Expert Ranking
                          </h2>
                        </div>
                        <div className="md:w-1/2 ml-10">
                          <Image
                            src={rock}
                            alt="How it works"
                            width={200}
                            height={200}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
        </main>
    </>
  )
}
