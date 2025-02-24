'use client'

import { FaBell, FaCog, FaUser, FaBars } from 'react-icons/fa'

export function TopNavbar({ setIsOpen }) {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => setIsOpen(true)} className="md:hidden mr-2 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaBars className="h-6 w-6" />
            </button>
            <span className="text-2xl font-semibold text-gray-800 md:hidden">Ideavate</span>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaBell className="h-6 w-6" />
            </button>
            <button className="ml-3 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaCog className="h-6 w-6" />
            </button>
            <button className="ml-3 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

