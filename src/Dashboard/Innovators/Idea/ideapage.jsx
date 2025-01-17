'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LuTrendingUp,  LuLightbulb,  LuCalendar, LuSearch} from 'react-icons/lu'

// Mock data for ideas
const mockIdeas = [
    { id: 1, title: "Eco-Friendly Packaging", category: "Environment", rating: 4.5, date: "2023-05-15", status: "ranked", score: 85, fullName: "John Doe", email: "john@example.com", description: "Biodegradable packaging solution for consumer goods." },
    { id: 2, title: "AI-Powered Health Assistant", category: "Healthcare", rating: 4.8, date: "2023-05-10", status: "funded", score: 92, fullName: "Jane Smith", email: "jane@example.com", description: "Personal health assistant using artificial intelligence." },
    { id: 3, title: "Sustainable Urban Farming", category: "Agriculture", rating: 4.2, date: "2023-05-20", status: "waiting", score: 78, fullName: "Bob Johnson", email: "bob@example.com", description: "Vertical farming solution for urban areas." },
    { id: 4, title: "Renewable Energy Storage", category: "Energy", rating: 4.6, date: "2023-05-18", status: "ranked", score: 88, fullName: "Alice Brown", email: "alice@example.com", description: "Advanced battery technology for renewable energy storage." },
    { id: 5, title: "Smart City Traffic Management", category: "Technology", rating: 4.3, date: "2023-05-12", status: "waiting", score: 82, fullName: "Charlie Wilson", email: "charlie@example.com", description: "AI-driven traffic management system for smart cities." },
  ]

export default function IdeaDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const router = useRouter()

  // Filter ideas based on search term and date filter
  const filteredIdeas = mockIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (dateFilter === '' || idea.date === dateFilter)
  )

  const handleRowClick = (id) => {
    router.push(`/innovator/idea/${id}`)
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-start mb-2">The next big thing</h1>
      <p className="text-sm tex-start text-gray-600 mb-8">
        Track and manage all your ideas submitted
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Total Ideas</h3>
            <LuLightbulb className="h-6 w-6 text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">467</span> 
          </div>
          <div className="flex items-baseline space-x-2 pt-4">
                <LuTrendingUp className="h-5 w-5 text-green" />
                <p className="text-sm text-gray-500 "><span className='text-green'>3.8%</span> from yesterday Ideas</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Waiting Idea</h3>
            <LuTrendingUp className="h-6 w-6 text-gray-400" />
          </div>
          <div className="text-2xl font-bold mb-2">1024</div>
          <div className="flex items-baseline space-x-2 pt-4">
                <LuTrendingUp className="h-5 w-5 text-green" />
                <p className="text-sm text-gray-500 "><span className='text-green'>1.3%</span> from yesterday Ideas</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <LuCalendar className="h-6 w-6 text-gray-400" />
          </div>
          <div className="text-2xl font-bold mb-6">3 hours ago</div>
          <p className="text-sm text-red-600">Last idea submission</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <LuSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All dates</option>
            <option value="2023-05-20">2023-05-20</option>
            <option value="2023-05-15">2023-05-15</option>
            <option value="2023-05-10">2023-05-10</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr
               className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
               
               >
                <th className="py-3 px-6 text-left">Project Title</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Rating</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {filteredIdeas.map((idea) => (
                <tr key={idea.id} className="border-b border-gray-200 hover:bg-gray-100" onClick={() => handleRowClick(idea.id)}>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <span className="font-medium">{idea.title}</span>
                  </td>
                  <td className="py-3 px-6 text-left">{idea.category}</td>
                  <td className="py-3 px-6 text-left">{idea.rating}</td>
                  <td className="py-3 px-6 text-left">{idea.date}</td>
                  <td className="py-3 px-6 text-left">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${idea.status === 'ranked' ? 'bg-yellow-200 text-yellow-800' :
                        idea.status === 'waiting' ? 'bg-blue-200 text-blue-800' :
                        'bg-green text-white'}`}>
                      {idea.status.charAt(0).toUpperCase() + idea.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

