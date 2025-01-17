import { FaBook, FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

// Mock data for evaluation details
const mockEvaluationDetails = {
  feasibility: 75,
  marketOpportunity: 80,
  scalability: 70,
  financialUnderstanding: 65,
  leadershipSkills: 85,
  total: 75,
  additionalRemarks: "The project shows promise, particularly in its market opportunity and the team's leadership skills. However, there's room for improvement in financial understanding and scalability aspects."
}

export default function EvaluationDetails({ id }) {
  // In a real application, you would fetch the evaluation details based on the id
  const evaluation = mockEvaluationDetails

  const renderCriterion = (label, value) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
          <div className="bg-green h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
        </div>
        <span className="text-sm font-medium text-gray-900">{value}%</span>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex items-center mb-6">
        <FaBook className="text-4xl mr-4 text-green" />
        <h1 className="text-2xl font-bold">Expert Evaluation</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {renderCriterion("Feasibility", evaluation.feasibility)}
        {renderCriterion("Market Opportunity", evaluation.marketOpportunity)}
        {renderCriterion("Scalability", evaluation.scalability)}
        {renderCriterion("Financial Understanding", evaluation.financialUnderstanding)}
        {renderCriterion("Leadership & Entrepreneurial Skills", evaluation.leadershipSkills)}
        {renderCriterion("Total", evaluation.total)}

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Additional Remarks</h3>
          <p className="text-gray-700">{evaluation.additionalRemarks}</p>
        </div>
      </div>
    </div>
  )
}

