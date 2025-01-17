'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Mock data (in a real application, you'd fetch this data based on the ID)
const mockIdeas = [
  { id: 1, title: "Eco-Friendly Packaging", category: "Environment", rating: 4.5, date: "2023-05-15", status: "ranked", score: 85, fullName: "John Doe", email: "john@example.com", description: "Biodegradable packaging solution for consumer goods." },
  { id: 2, title: "AI-Powered Health Assistant", category: "Healthcare", rating: 4.8, date: "2023-05-10", status: "funded", score: 92, fullName: "Jane Smith", email: "jane@example.com", description: "Personal health assistant using artificial intelligence." },
  { id: 3, title: "Sustainable Urban Farming", category: "Agriculture", rating: 4.2, date: "2023-05-20", status: "waiting", score: 78, fullName: "Bob Johnson", email: "bob@example.com", description: "Vertical farming solution for urban areas." },
  { id: 4, title: "Renewable Energy Storage", category: "Energy", rating: 4.6, date: "2023-05-18", status: "ranked", score: 88, fullName: "Alice Brown", email: "alice@example.com", description: "Advanced battery technology for renewable energy storage." },
  { id: 5, title: "Smart City Traffic Management", category: "Technology", rating: 4.3, date: "2023-05-12", status: "waiting", score: 82, fullName: "Charlie Wilson", email: "charlie@example.com", description: "AI-driven traffic management system for smart cities." },
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
    router.push('/innovator/ideas')
  }

  const handleCancel = () => {
    router.push('/innovator/ideas')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{idea.title}</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="flex flex-col space-y-2">
            {['Idea submitted', 'Evaluation details', 'Funding details'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 text-left ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-3/4">
          {activeTab === 'Idea submitted' && (
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold">Project Title</p>
                  <p>{idea.title}</p>
                </div>
                <div>
                  <p className="font-semibold">Category</p>
                  <p>{idea.category}</p>
                </div>
                <div>
                  <p className="font-semibold">Graded Score</p>
                  <p>{idea.score}/100</p>
                </div>
                <div>
                  <p className="font-semibold">Date</p>
                  <p>{idea.date}</p>
                </div>
                <div>
                  <p className="font-semibold">Status</p>
                  <p>{idea.status.charAt(0).toUpperCase() + idea.status.slice(1)}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Full Name</p>
                  <p>{idea.fullName}</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>{idea.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Description</p>
                  <p>{idea.description}</p>
                </div>
                {/* Add more fields here as needed */}
              </div>
            </div>
          )}
          
          {activeTab === 'Evaluation details' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Evaluation Details</h2>
              <p>Evaluation details will be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'Funding details' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Funding Details</h2>
              <p>Funding details will be displayed here.</p>
            </div>
          )}
          
          <div className="mt-8 space-x-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
      </div>
    </div>
  )
}

