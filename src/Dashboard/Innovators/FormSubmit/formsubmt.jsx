'use client'

import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'

const projectCategories = ['Technology', 'Healthcare', 'Education', 'Finance', 'Environment', 'Other']
const projectStages = ['Idea', 'Prototype', 'MVP', 'Full Product']

const Formsubmt = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    stage: '',
    fundingGoals: '',
    timelineEstimate: '',
    problem: '',
    monetization: '',
    potentialEarnings: '',
    competitors: '',
    marketChange: '',
    idealCustomer: '',
    pitchDeck: null,
    videoPitchLink: '',
    fundingMotivation: '',
    significantAchievement: '',
    fundingJustification: '',
    termsAgreed: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    // Reset form or redirect user after successful submission
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submit your idea</h1>

      <form onSubmit={handleSubmit} className="space-y-6 shadow rounded-lg p-6">
      <p className="text-lg mb-8">Fill in the details</p>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Project/Idea Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Project Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {projectCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
              Project Stage
            </label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a stage</option>
              {projectStages.map(stage => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Brief Description (max 200 characters)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            maxLength={200}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fundingGoals" className="block text-sm font-medium text-gray-700 mb-1">
              Funding Goals
            </label>
            <input
              type="text"
              id="fundingGoals"
              name="fundingGoals"
              value={formData.fundingGoals}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="timelineEstimate" className="block text-sm font-medium text-gray-700 mb-1">
              Estimated Timeline for Development
            </label>
            <input
              type="text"
              id="timelineEstimate"
              name="timelineEstimate"
              value={formData.timelineEstimate}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
            Problem you are solving and for whom
          </label>
          <textarea
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="monetization" className="block text-sm font-medium text-gray-700 mb-1">
            How do you or will you make money?
          </label>
          <textarea
            id="monetization"
            name="monetization"
            value={formData.monetization}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="potentialEarnings" className="block text-sm font-medium text-gray-700 mb-1">
            How much could your startup make?
          </label>
          <input
            type="text"
            id="potentialEarnings"
            name="potentialEarnings"
            value={formData.potentialEarnings}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="competitors" className="block text-sm font-medium text-gray-700 mb-1">
            Who are your competitors both locally and globally?
          </label>
          <textarea
            id="competitors"
            name="competitors"
            value={formData.competitors}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="marketChange" className="block text-sm font-medium text-gray-700 mb-1">
            What has changed about the market that makes your idea possible today?
          </label>
          <textarea
            id="marketChange"
            name="marketChange"
            value={formData.marketChange}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="idealCustomer" className="block text-sm font-medium text-gray-700 mb-1">
            Who is your ideal customer?
          </label>
          <textarea
            id="idealCustomer"
            name="idealCustomer"
            value={formData.idealCustomer}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="pitchDeck" className="block text-sm font-medium text-gray-700 mb-1">
            Pitch Deck Upload (Optional; file types: PDF, DOC)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="pitchDeck" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span>Upload a file</span>
                  <input
                    id="pitchDeck"
                    name="pitchDeck"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF or DOC up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="videoPitchLink" className="block text-sm font-medium text-gray-700 mb-1">
            Video Pitch Link (Optional; YouTube, Vimeo, etc.)
          </label>
          <input
            type="url"
            id="videoPitchLink"
            name="videoPitchLink"
            value={formData.videoPitchLink}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="fundingMotivation" className="block text-sm font-medium text-gray-700 mb-1">
            What motivates you to seek funding?
          </label>
          <textarea
            id="fundingMotivation"
            name="fundingMotivation"
            value={formData.fundingMotivation}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="significantAchievement" className="block text-sm font-medium text-gray-700 mb-1">
            What do you consider as your most significant achievement?
          </label>
          <textarea
            id="significantAchievement"
            name="significantAchievement"
            value={formData.significantAchievement}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="fundingJustification" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you think you deserve this funding?
          </label>
          <textarea
            id="fundingJustification"
            name="fundingJustification"
            value={formData.fundingJustification}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Terms and Consent</h3>
          <p className="text-sm text-gray-600">
            Entrepreneurs retain ownership of their ideas but grant the platform a non-exclusive license to use the submission for evaluation, promotional, and investment facilitation purposes. Submitted ideas will be evaluated and ranked by registered Experts based on predefined criteria. The platform reserves the right to determine how ideas are displayed and does not guarantee funding or approval of any submission. Entrepreneurs are responsible for ensuring the accuracy of the information provided, and misrepresentation may result in disqualification and account termination. The platform is not liable for any damages arising from exposure, evaluation outcomes, or lack of funding. The platform collects and processes user data per its Privacy Policy. It reserves the right to modify these Terms and Conditions at any time, with significant changes communicated to users. The platform may suspend or terminate accounts for violations of these Terms and Conditions without prior notice. These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Disputes will be resolved through arbitration in Lagos, Nigeria, under the rules set by the Arbitration and Conciliation Act of Nigeria or any applicable legislation.
          </p>
          <div className="flex items-start">
            <input
              id="termsAgreed"
              name="termsAgreed"
              type="checkbox"
              checked={formData.termsAgreed}
              onChange={handleInputChange}
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="termsAgreed" className="ml-2 block text-sm text-gray-900">
              I agree to the terms of service and privacy policy
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Formsubmt
