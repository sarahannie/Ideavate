import { FaBook, FaClock, FaCheck } from 'react-icons/fa'

export default function FundingProgress() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <FaClock className="text-3xl mr-4 text-green" />
        <h1 className="text-2xl font-bold">Funding Proposal</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
          <p className="text-lg font-semibold">Acme Investments Ltd.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Investment Experience (Optional)</label>
          <p className="text-gray-800">10+ years in tech startups and sustainable energy projects</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount Interested in Funding ($)</label>
          <div className="border-b-2 border-gray-300 pb-2">
            <p className="text-lg font-semibold">$500,000</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Investment Type</label>
          <p className="text-gray-800">Equity</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Comments or Questions for Innovator</label>
          <p className="text-gray-800">
            We're particularly interested in your go-to-market strategy and how you plan to scale the business in the first two years.
          </p>
        </div>

        <div className="flex items-center">
          <FaCheck className="text-green-500 mr-2" />
          <p className="text-sm text-gray-700">I agree to the platform's terms for investors</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Remarks</label>
          <p className="text-gray-800">
            Looking forward to discussing the potential synergies between our portfolio companies and your innovative solution.
          </p>
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <button className="px-6 py-2 bg-green text-white rounded hover:bg-green-600 transition duration-200">
            Reply
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition duration-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

