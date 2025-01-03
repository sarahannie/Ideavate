
import React from 'react'
import rock from "@/public/rocket-coins.png"
import Image from 'next/image'
import about from '@/public/about.png'
import Action from '@/src/components/Action'
import vision from '@/public/vision.png'
import vision1 from '@/public/vision1.png'
import Team from '@/src/components/Team'
import mision from '@/public/mision (1).png'
import mision2 from '@/public/mision (2).png'


const AboutPage = () => {
  return (
    <>
    <section className="w-full bg-gradient-to-r from-white to-green py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-10 md:mb-0">
                  <h3 className="text-2xl font-semibold text-green mb-4">
                    About ideavate
                </h3>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Empowering <span className='text-green'>Ideas</span> &
                <span className='text-green'> Connecting </span>Innovators
                and Investors
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
        {/* About ideavate */}
         <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2">
                      <Image
                        src={about}
                        alt="About Ideavate"
                        width={540}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                      <h3 className="text-xl font-semibold text-green ">
                        About ideavate?
                      </h3>
                      <p className='pb-4'>
                      Ideavate is a pioneering crowdfunding platform dedicated to transforming the way innovative ideas are brought to life. Founded with the vision of creating an ecosystem where creativity meets opportunity, we empower aspiring entrepreneurs by connecting them with industry experts and investors who share their passion for innovation. 
                      </p>
                      <p className='pb-4'>
                      We envision a world where innovative thinkers can easily access the resources they need to launch their projects. By fostering collaboration between idea submitters, experts, and investors, we aim to create a vibrant community that nurtures creativity and drives economic growth.The Challenge: 90% of innovative ideas struggle to find funding due to lacking visibility and credibility.
                      </p>
                      <p className='pb-4'>
                      Current Solutions: Traditional crowdfunding platforms often lack expert validation, leading to hig failure rates for funded projects.83% of aspiring entrepreneurs struggle to access capital and investor networks.Lack of expert validation makes it hard for investors to trust or evaluate early-stage ideas
                      </p>
                      <p className='pb-4'>
                        Crowdfunding platforms often lack a robust evaluation mechanism, leading to poorly vetted ideas and increased investor risk
                      </p>
                    </div>
                    
                  </div>
         </section>
            {/* action */}
            <Action/>
            {/* Vision */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                  <Image
                        src={vision1}
                        alt="About Ideavate"
                        width={540}
                        height={300}
                        className="rounded-lg"
                      />
                      {/* <h3 className="text-xl font-semibold text-bold ">
                      Our Vision
                      </h3>
                      
                      <p className='pb-4 text-2xl text-[#496179]'>
                      To be the global leader in business consulting, known for transforming organizations through forward-thinking strategies and a relentless focus on delivering exceptional client outcomes.
                      </p> */}
                      
                    </div>
                  <div className="md:w-1/2">
                      <Image
                        src={vision}
                        alt="About Ideavate"
                        width={540}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    
                    
                  </div>
            </section>
            {/* Mision */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2">
                      <Image
                        src={mision}
                        alt="About Ideavate"
                        width={540}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                  <Image
                        src={mision2}
                        alt="About Ideavate"
                        width={540}
                        height={300}
                        className="rounded-lg"
                      />
                      {/* <h3 className="text-xl font-semibold text-bold ">
                      Our Vision
                      </h3>
                      
                      <p className='pb-4 text-2xl text-[#496179]'>
                      To be the global leader in business consulting, known for transforming organizations through forward-thinking strategies and a relentless focus on delivering exceptional client outcomes.
                      </p> */}
                      
                    </div>
                  </div>
            </section>
            {/* Team */}
            <Team/>
    </>
    
  )
}

export default AboutPage