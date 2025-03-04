import Howitwork from '@/src/components/Howitwork'
import React from 'react'
import Image from 'next/image'
import rb1 from '@/public/rb_451 2 (1).png'
import rb2 from '@/public/rb_451 2 (2).png'
import rb3 from '@/public/rb_451 2 (3).png'
import Action from '@/src/components/Action'
import Team from '@/src/components/Team'

const Workflow = () => {
  return (
    <>
    <Howitwork/>
    {/* workflow */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                      <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2">
                          <Image
                            src={rb1}
                            alt="About Ideavate"
                            width={540}
                            height={300}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                          <h3 className="text-4xl font-semibold mb-4 ">
                          For Entrepreneurs:
                            Have an idea? Here’s where it takes flight!
                          </h3>
                          <p className='pb-4'>
                          <span className='font-bold'>What to Do:</span>  Submit your idea, complete your profile, and gain visibility by sharing your project with a community of seasoned experts and potential investors. Through InnovateCrowd, you can:
                          </p>
                          <p className='pb-4'>
                          <span className='font-bold'>Present Your Vision:</span> Submit a project summary and, when ready, a detailed pitch to help experts and investors understand the value of your idea.

                          </p>
                          <p className='pb-4'>
                          <span className='font-bold'>Receive Expert Feedback:</span> Experts will evaluate and rank your idea, offering guidance on areas like feasibility, scalability, and market potential
                          </p>
                          <p className='pb-4'>
                            <span className='font-bold'>
                            High-ranking High-ranking 
                            </span>Engage with Investors: projects gain visibility among investors who may provide the funding needed to bring your project to life.
As an entrepreneur, you’ll engage with insights, refine your pitch, and build relationships that can set your venture up for success!

                          </p>
                          <button className='py-2 px-5 bg-black text-white font-bond'>Submit Your Idea</button>
                        </div>
                        
                      </div>
    </section>
             <Action />
    {/* Expert */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                      <div className="flex flex-col md:flex-row items-center">
                      
                        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                          <h3 className="text-4xl font-semibold mb-4 ">
                          For Experts:
                        Shape the future by lending your expertise.

                          </h3>
                          <p className='pb-4'>
                          <span className='font-bold'>What to Do:</span> Register as an expert, complete your profile, and provide valuable insights by evaluating submitted ideas. As an expert, you will:

                          </p>
                          <p className='pb-4'>
                          <span className='font-bold'>Review Ideas:</span> 
 Evaluate and rank ideas across industries, offering constructive feedback to help entrepreneurs enhance their projects.

                          </p>
                          <p className='pb-4'>
                          <span className='font-bold'>Guide Emerging Projects:</span> 

 Share insights on market fit, potential challenges, and growth opportunities.
                          </p>
                          <p className='pb-4'>
                            <span className='font-bold'>
                            Offer Consulting Services:
                            </span>

 If you choose, you can work directly with entrepreneurs on a consulting basis, helping them implement improvements and achieve their goals.
Your expertise plays a crucial role in supporting new ideas and building credibility within the InnovateCrowd community.


                          </p>
                          <button className='py-2 px-5 bg-black text-white font-bond'>Register</button>
                        </div>
                        <div className="md:w-1/2">
                          <Image
                            src={rb2}
                            alt="About Ideavate"
                            width={540}
                            height={300}
                            className="rounded-lg"
                          />
                        </div>
                        
                      </div>
    </section>
    {/* Investor */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                      <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2">
                          <Image
                            src={rb3}
                            alt="About Ideavate"
                            width={540}
                            height={300}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                          <h3 className="text-4xl font-semibold mb-8 ">
                          For Investors:
                            Support high-potential projects vetted by experts
                          </h3>
                          <p className='pb-4'>
                          <span className='font-bold'>What to Do:</span>  Register as an investor, customize your investment preferences, and explore high-ranking projects that align with your goals. On InnovateCrowd, you can
                          </p>
                          <p className='pb-4'>
                          <span className='font-bold'>Discover Promising Projects:</span> Discover Promising Projects: Our platform provides access to top-rated, expert-vetted projects tailored to your preferred industry and funding range.


                          </p>
                          <p className='pb-4'>
                          <span className='font-bold'>Connect with Founders:</span> 
                         Learn about the entrepreneurs behind each idea and interact with them to discuss their vision and business model
                          </p>
                          <p className='pb-4'>
                            <span className='font-bold'>
                            Make Impactful Investments:
                            </span>
Make Impactful Investments: Back projects that resonate with you and provide funding to help ideas reach their full potential.


                          </p>
                          <button className='py-2 px-5 bg-black text-white font-bond'>Register</button>
                        </div>
                        
                      </div>
    </section>
    <Team/>
    </>
  )
}

export default Workflow