'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { TopNavbar } from './navbar'


export function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar setIsOpen={setIsOpen} />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

