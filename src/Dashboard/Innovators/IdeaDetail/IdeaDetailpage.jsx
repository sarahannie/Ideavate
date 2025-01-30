"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FaUser, FaChartBar, FaDollarSign } from "react-icons/fa"
import EvaluationDetails from "../feedback/feedbackpage"
import FundingProgress from "../funding/funding"

const navItems = [
  { name: "Idea submitted", icon: FaUser },
  { name: "Evaluation details", icon: FaChartBar },
  { name: "Funding details", icon: FaDollarSign },
]

export default function IdeaDetail({ params }) {
  const [activeTab, setActiveTab] = useState("Idea submitted")
  const [idea, setIdea] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

 
    useEffect(() => {
      const fetchIdea = async () => {
        if (!params?._id) {
          setError("No idea ID provided")
          setIsLoading(false)
          return
        }
  
        try {
          console.log("Fetching idea with ID:", params._id)
          const response = await fetch(`/api/auth/innovetors/${params._id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
  
          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
          }
  
          const data = await response.json()
          console.log("Fetched idea data:", data)
          setIdea(data)
        } catch (error) {
          console.error("Error fetching idea:", error)
          setError(`Failed to load idea. Please try again. Error: ${error.message}`)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchIdea()
    }, [params?._id])



  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/auth/innovetors/${params._id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete idea")
      }
      router.push("/innovator/dashboard")
    } catch (error) {
      console.error("Error deleting idea:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleCancel = () => {
    router.push("/innovator/dashboard")
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!idea) {
    return <div>Idea not found</div>
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600 p-4 bg-red-50 rounded-lg">
          <p>{error}</p>
          <button
            onClick={() => router.push("/innovator/dashboard")}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    )
  }

  if (!idea) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p>Idea not found</p>
          <button
            onClick={() => router.push("/innovator/dashboard")}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    )
  }

  const renderIdeaSubmitted = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Idea Details</h2>
      <div className="space-y-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fullName}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Topic</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.title}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Category</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.category}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Brief Project Description</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.description}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Stage</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.stage || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Funding Goal</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fundingGoals || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Timeline for Development</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.timelineEstimate || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem Being Solved and Target Audience
          </label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.problem || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Monetization Strategy</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.monetization || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Potential Earnings</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.potentialEarnings || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Competitors (Local and Global)</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.competitors || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Market Changes Enabling the Idea</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.marketChange || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ideal Customer</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.idealCustomer || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Motivation for Seeking Funding</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fundingMotivation || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Most Significant Achievement</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.significantAchievement || "Not specified"}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Justification for Funding</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fundingJustification || "Not specified"}</p>
        </div>
      </div>
    </div>
  )

  const renderEvaluationDetails = () => <EvaluationDetails />

  const renderFundingDetails = () => <FundingProgress />

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{idea.title}</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <span className="font-semibold">Project Title:</span> {idea.title}
          </div>
          <div>
            <span className="font-semibold">Category:</span> {idea.category}
          </div>
          <div>
            <span className="font-semibold">Graded Score:</span> {idea.score ? `${idea.score}/100` : "Not graded yet"}
          </div>
          <div>
            <span className="font-semibold">Date:</span> {new Date(idea.submittedAt).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold">Status:</span>
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold
              ${
                idea.status === "ranked"
                  ? "bg-yellow-200 text-yellow-800"
                  : idea.status === "waiting"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-green-200 text-green-800"
              }`}
            >
              {idea.status.charAt(0).toUpperCase() + idea.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center p-2 rounded-lg transition-all ${
                    activeTab === item.name
                      ? "bg-white text-green-500 shadow-md outline outline-2 outline-green-500 border-b-2 border-black"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mb-6">
        {activeTab === "Idea submitted" && renderIdeaSubmitted()}
        {activeTab === "Evaluation details" && renderEvaluationDetails()}
        {activeTab === "Funding details" && renderFundingDetails()}
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={handleDelete} className="bg-green text-white px-4 py-2 rounded hover:bg-red-600">
          Delete
        </button>
        <button onClick={handleCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
          Cancel
        </button>
      </div>
    </div>
  )
}

