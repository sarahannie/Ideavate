'use client'
import Image from 'next/image'
import React from 'react'

import content from "@/public/Content.png"
import contact from "@/public/contect.png"
import { Input } from 'postcss'
import Landinghero from '@/src/components/Landinghero'
import Founder from '@/src/components/founder'
import AboutlandingPage from '@/src/components/AboutlandingPage'
import Team from '@/src/components/Team'
import Howitwork from '@/src/components/Howitwork'
import Innovate from '@/src/components/Innovate'
import Feature from '@/src/components/Feature'
import Action from '@/src/components/Action'
import Contact from '@/src/components/Contact'

const Landpage = () => {
 

  return (
    <>
  <div className="flex flex-col items-center justify-center">
    <Landinghero/>
    <Founder/>
    <AboutlandingPage />
    <Team/>
    <Howitwork/>
    <Innovate />
    <Feature />
    <Action/>
    <Contact />
  </div>
    </>
  )
}

export default Landpage