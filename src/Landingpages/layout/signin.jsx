'use client'

import { useState } from 'react'
// import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import group from '@/public/Group.png'
import Image from 'next/image'
import Link from 'next/link'

const Signin = () => {
const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
          })
    
          if (result?.error) {
            setError(result.error)
          } else {
            router.push('/dashboard') // Redirect to dashboard on successful sign-in
          }
        } catch (error) {
          setError('An error occurred during sign-in')
        }
      }
  return (
    <>
    <div className='flex justify-center max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 shadow-lg shadow-indigo-200/50 mt-20 mb-20 rounded-lg'>
    <form onSubmit={handleSubmit} className="mt-8 w-1/2 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px ">
        <div className='my-4'>
        <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         
        
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="keep-logged-in"
            name="keep-logged-in"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            checked={keepLoggedIn}
            onChange={(e) => setKeepLoggedIn(e.target.checked)}
          />
          <label htmlFor="keep-logged-in" className="ml-2 block text-sm text-gray-900">
            Keep me logged in
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign in with</span>
          </div>
        </div>

        <div className="mt-6 ">
        
          <button
            onClick={() => signIn('google')}
            className="w-full flex justify-center gap-2 font-semibold py-2 px-4 border border-gray-300 rounded-md shadow-sm text-md font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            
             Sign in with Google
             <Image src={group}  width={20} height={20} alt='google' />
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">Need to create <Link href="/signup" className="text-blue-600">an account?</Link></div>
      </div>

      {error && (
        <div className="mt-4 text-center text-sm text-red-600">
          {error}
        </div>
      )}
    </form>
    </div>
     
    </>
  )
}

export default Signin