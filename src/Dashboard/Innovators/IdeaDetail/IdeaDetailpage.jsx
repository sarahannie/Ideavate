'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaUser, FaChartBar, FaDollarSign } from 'react-icons/fa'
import EvaluationDetails from '../feedback/feedbackpage'
import FundingProgress from '../funding/funding'

// Mock data (in a real application, you'd fetch this data based on the ID)
const mockIdeas = [
  {
    id: 1,
    title: "Eco-Friendly Packaging",
    category: "Environment",
    score: 85,
    date: "2023-05-15",
    status: "ranked",
    fullName: "John Doe",
    email: "john@example.com",
    description: "Biodegradable packaging solution for consumer goods.",
    stage: "Prototype",
    fundingGoal: "$500,000",
    timeline: "18 months",
    problem: "Reducing plastic waste in packaging for environmentally conscious consumers",
    monetization: "B2B sales to eco-friendly product manufacturers",
    potentialEarnings: "$2 million annually within 3 years",
    competitors: "GreenPack, EcoWrap (local), PackFresh, EarthBox (global)",
    marketChanges: "Increasing consumer demand for sustainable packaging solutions",
    idealCustomer: "Environmentally conscious product manufacturers",
    fundingMotivation: "Scale production and expand market reach",
    significantAchievement: "Developed a prototype that decomposes 50% faster than current alternatives",
    fundingJustification: "Proven concept with strong market demand and environmental impact"
  },
  { id: 2, title: "AI-Powered Health Assistant", category: "Healthcare", score: 92, date: "2023-05-10", status: "funded", fullName: "Jane Smith", email: "jane@example.com", description: "Personal health assistant using artificial intelligence.", stage: "Development", fundingGoal: "$1,000,000", timeline: "24 months", problem: "Improving access to affordable and personalized healthcare", monetization: "Subscription model", potentialEarnings: "$5 million annually within 5 years", competitors: "Babylon Health, Ada Health (global)", marketChanges: "Growing adoption of AI in healthcare", idealCustomer: "Individuals seeking convenient and affordable healthcare", fundingMotivation: "Accelerate development and expand features", significantAchievement: "Secured partnerships with leading healthcare providers", fundingJustification: "High market potential and strong team expertise" },
  { id: 3, title: "Sustainable Urban Farming", category: "Agriculture", score: 78, date: "2023-05-20", status: "waiting", fullName: "Bob Johnson", email: "bob@example.com", description: "Vertical farming solution for urban areas.", stage: "Concept", fundingGoal: "$250,000", timeline: "12 months", problem: "Addressing food security and sustainability in urban environments", monetization: "Direct sales to consumers and restaurants", potentialEarnings: "$1 million annually within 3 years", competitors: "Plenty, AeroFarms (global)", marketChanges: "Growing interest in local and sustainable food sources", idealCustomer: "Urban consumers and restaurants", fundingMotivation: "Develop a functional prototype and test market viability", significantAchievement: "Secured a pilot project with a local community garden", fundingJustification: "Innovative solution with strong environmental and social impact" },
  { id: 4, title: "Renewable Energy Storage", category: "Energy", score: 88, date: "2023-05-18", status: "ranked", fullName: "Alice Brown", email: "alice@example.com", description: "Advanced battery technology for renewable energy storage.", stage: "Research", fundingGoal: "$750,000", timeline: "36 months", problem: "Improving the efficiency and affordability of renewable energy storage", monetization: "Licensing agreements with energy companies", potentialEarnings: "$3 million annually within 5 years", competitors: "Tesla, LG Chem (global)", marketChanges: "Increasing demand for renewable energy solutions", idealCustomer: "Energy companies and utilities", fundingMotivation: "Advance research and development", significantAchievement: "Developed a new battery technology with improved energy density", fundingJustification: "High potential for commercialization and significant environmental benefits" },
  { id: 5, title: "Smart City Traffic Management", category: "Technology", score: 82, date: "2023-05-12", status: "waiting", fullName: "Charlie Wilson", email: "charlie@example.com", description: "AI-driven traffic management system for smart cities.", stage: "Testing", fundingGoal: "$500,000", timeline: "24 months", problem: "Reducing traffic congestion and improving transportation efficiency in urban areas", monetization: "Software licensing and service fees", potentialEarnings: "$2 million annually within 3 years", competitors: "Waze, Google Maps (global)", marketChanges: "Growing adoption of smart city technologies", idealCustomer: "City governments and transportation authorities", fundingMotivation: "Deploy the system in a pilot city", significantAchievement: "Successfully tested the system in a simulated environment", fundingJustification: "Proven technology with significant potential for improving urban mobility" }
]

const navItems = [
  { name: 'Idea submitted', icon: FaUser },
  { name: 'Evaluation details', icon: FaChartBar },
  { name: 'Funding details', icon: FaDollarSign },
]

export default function IdeaDetail({ id }) {
  const [activeTab, setActiveTab] = useState('Idea submitted')
  const router = useRouter()

  // Find the idea based on the ID
  const idea = mockIdeas.find(idea => idea.id === parseInt(id))

  if (!idea) {
    return <div>Idea not found</div>
  }

  const handleDelete = () => {
    // Implement delete functionality here
    console.log('Delete idea:', idea.id)
    router.push('/ideas')
  }

  const handleCancel = () => {
    router.push('/ideas')
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
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.stage || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Funding Goal</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fundingGoal || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Timeline for Development</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.timeline || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Problem Being Solved and Target Audience</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.problem || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Monetization Strategy</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.monetization || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Potential Earnings</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.potentialEarnings || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Competitors (Local and Global)</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.competitors || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Market Changes Enabling the Idea</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.marketChanges || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ideal Customer</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.idealCustomer || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Motivation for Seeking Funding</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fundingMotivation || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Most Significant Achievement</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.significantAchievement || 'Not specified'}</p>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Justification for Funding</label>
          <p className="text-gray-900 p-2 bg-gray-100 rounded">{idea.fundingJustification || 'Not specified'}</p>
        </div>
      </div>
    </div>
  )

  const renderEvaluationDetails = () => (
      <EvaluationDetails />
  )

  const renderFundingDetails = () => (
    <FundingProgress />
  )

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
            <span className="font-semibold">Graded Score:</span> {idea.score}/100
          </div>
          <div>
            <span className="font-semibold">Date:</span> {idea.date}
          </div>
          <div>
            <span className="font-semibold">Status:</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold
              ${idea.status === 'ranked' ? 'bg-yellow-200 text-yellow-800' :
                idea.status === 'waiting' ? 'bg-blue-200 text-blue-800' :
                'bg-green-200 text-green-800'}`}>
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
                      ? 'bg-white text-green-500 shadow-md outline outline-2 outline-green-500 border-b-2 border-black'
                      : 'hover:bg-gray-200'
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
        {activeTab === 'Idea submitted' && renderIdeaSubmitted()}
        {activeTab === 'Evaluation details' && renderEvaluationDetails()}
        {activeTab === 'Funding details' && renderFundingDetails()}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleDelete}
          className="bg-green text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

