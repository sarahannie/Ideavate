'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaHome, FaLightbulb, FaCommentDots, FaChartLine, FaTimes, FaSchlix } from 'react-icons/fa'

const sidebarItems = [
  { name: 'Dashboard', icon: FaHome, href: '/innovator/dashboard' },
  { name: 'Submit Idea', icon: FaSchlix, href: '/innovator/submit' },
  { name: 'My Ideas', icon: FaLightbulb, href: '/innovator/form' },
  { name: 'Expert Feedback', icon: FaCommentDots, href: '/innovator/expert-feedback' },
  { name: 'Funding Progress', icon: FaChartLine, href: '/innovator/funding-progress' },
]

export function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static`}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <span className="text-2xl font-semibold text-gray-800">Ideavate</span>
        <button onClick={() => setIsOpen(false)} className="md:hidden">
          <FaTimes className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <nav className="mt-5">
        <ul className="space-y-2 px-3">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-green hover:text-white">
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

