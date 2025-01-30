"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LuTrendingUp, LuLightbulb, LuCalendar, LuSearch } from "react-icons/lu"

export default function IdeaDashboard() {
  const [ideas, setIdeas] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [dateFilter, setDateFilter] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    fetchIdeas()
  }, [])

  const fetchIdeas = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/auth/innovetors")
      if (!response.ok) {
        throw new Error("Failed to fetch ideas")
      }
      const data = await response.json()
      setIdeas(data)
    } catch (error) {
      console.error("Error fetching ideas:", error)
      setError("Failed to load ideas. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Filter ideas based on search term and date filter
  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (dateFilter === "" || idea.submittedAt.split("T")[0] === dateFilter),
  )

  const handleRowClick = (id) => {
    router.push(`/innovator/idea/${id}`)
  }

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-start mb-2">The next big thing</h1>
      <p className="text-sm tex-start text-gray-600 mb-8">Track and manage all your ideas submitted</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Total Ideas</h3>
            <LuLightbulb className="h-6 w-6 text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">{ideas.length}</span>
          </div>
          <div className="flex items-baseline space-x-2 pt-4">
            <LuTrendingUp className="h-5 w-5 text-green" />
            <p className="text-sm text-gray-500 ">
              <span className="text-green">3.8%</span> from yesterday Ideas
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Waiting Ideas</h3>
            <LuTrendingUp className="h-6 w-6 text-gray-400" />
          </div>
          <div className="text-2xl font-bold mb-2">{ideas.filter((idea) => idea.status === "waiting").length}</div>
          <div className="flex items-baseline space-x-2 pt-4">
            <LuTrendingUp className="h-5 w-5 text-green" />
            <p className="text-sm text-gray-500 ">
              <span className="text-green">1.3%</span> from yesterday Ideas
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <LuCalendar className="h-6 w-6 text-gray-400" />
          </div>
          <div className="text-2xl font-bold mb-6">
            {ideas.length > 0
              ? new Date(Math.max(...ideas.map((idea) => new Date(idea.submittedAt)))).toLocaleString()
              : "No ideas yet"}
          </div>
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
            {[...new Set(ideas.map((idea) => idea.submittedAt.split("T")[0]))].map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Project Title</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Stage</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {filteredIdeas.map((idea) => (
                <tr
                  key={idea._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                  onClick={() => handleRowClick(idea._id)}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <span className="font-medium">{idea.title}</span>
                  </td>
                  <td className="py-3 px-6 text-left">{idea.category}</td>
                  <td className="py-3 px-6 text-left">{idea.stage}</td>
                  <td className="py-3 px-6 text-left">{new Date(idea.submittedAt).toLocaleDateString()}</td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        idea.status === "ranked"
                          ? "bg-yellow-200 text-yellow-800"
                          : idea.status === "waiting"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-green text-white"
                      }`}
                    >
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

