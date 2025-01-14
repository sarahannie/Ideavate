'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaUser, FaLock, FaCreditCard, FaEnvelope, FaBell, FaIdCard } from 'react-icons/fa'
import Team from '@/public/Team (1).png'

const navItems = [
  { name: 'My Details', icon: FaUser },
  { name: 'Profile Update', icon: FaIdCard },
  { name: 'Password', icon: FaLock },
  { name: 'Plan', icon: FaCreditCard },
  { name: 'Email', icon: FaEnvelope },
  { name: 'Notifications', icon: FaBell },
]

const ProfileUpdate = () => {
  const [activeTab, setActiveTab] = useState('My Details')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    contact: '',
    maritalStatus: '',
    countryOfResidence: '',
    localGovernment: '',
    stateOfOrigin: '',
    address: '',
    nationality: '',
    nin: '',
    educationLevel: '',
    preferredLanguage: '',
    primaryInstitution: '',
    yearsOfExperience: '',
    portfolioWebsite: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const isFormComplete = Object.values(formData).every(value => value !== '')

  // This would typically come from your authentication context or API
  const user = {
    name: 'Annie',
    email: 'annie@example.com',
    avatar: Team,
  }

  const renderMyDetails = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      {/* <p className="text-green-600 mb-4">Your Profile has been updated Successfully</p>
      <button className="bg-green text-white px-4 py-2 rounded hover:bg-green-600 mb-6">
        Proceed to submit your idea
      </button> */}
      <h3 className="text-xl font-semibold mb-4">Submit your personal info</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            <p className="text-gray-900">{value || 'Not provided'}</p>
          </div>
        ))}
      </div>
      {isFormComplete ? (
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
          Proceed to submit idea
        </button>
      ) : (
        <button
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded mt-4 cursor-not-allowed"
          onClick={() => setActiveTab('Profile Update')}
        >
          Fill out all details to proceed to submit your idea
        </button>
      )}
    </div>
  )

  const renderProfileUpdate = () => (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left column with user info and picture */}
      <div className="w-full md:w-1/3">
        <div className="bg-white rounded-lg shadow p-6">
          <Image
            src={user.avatar}
            alt="User avatar"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-center">{user.name}</h2>
          <p className="text-gray-600 text-center">{user.email}</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
            <p className="text-gray-600 mb-4">Update your photo and personal details here.</p>
          </div>
        </div>
      </div>

      {/* Right column with form */}
      <div className="w-full md:w-2/3">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-6">Profile Update</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                {key === 'gender' || key === 'maritalStatus' || key === 'educationLevel' ? (
                  <select
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select {key.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                    {key === 'gender' && (
                      <>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </>
                    )}
                    {key === 'maritalStatus' && (
                      <>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </>
                    )}
                    {key === 'educationLevel' && (
                      <>
                        <option value="highSchool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">Ph.D.</option>
                      </>
                    )}
                  </select>
                ) : (
                  <input
                    type={key === 'email' ? 'email' : key === 'dateOfBirth' ? 'date' : key === 'yearsOfExperience' ? 'number' : 'text'}
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            ))}
            <div className="col-span-2">
              <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-2">
              <button type="submit" className="bg-green text-white px-4 py-2 rounded hover:bg-black">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
  const renderPasswordSection = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Password Management</h2>
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <FaLock className="text-6xl text-gray-400 mb-4 mx-auto" />
          <p className="text-xl font-semibold text-gray-600">Coming Soon</p>
          <p className="text-gray-500 mt-2">Password management features will be available in the near future.</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col">
      {/* Top navbar */}
      <div className="w-full p-4 mb-6">
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center p-2 rounded-lg transition-all ${
                    activeTab === item.name
                      ? 'bg-white text-green shadow-md outline outline-2 outline-green-500 border-b-2 border-green'
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

      {/* Main content */}
      <div className="px-4">
        {activeTab === 'My Details' && renderMyDetails()}
        {activeTab === 'Profile Update' && renderProfileUpdate()}
        {activeTab === 'Password' && renderPasswordSection()}
        {/* Add other tab contents here */}
      </div>
    </div>
  )
}

export default ProfileUpdate

