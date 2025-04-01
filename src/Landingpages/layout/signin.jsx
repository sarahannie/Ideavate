'use client'

import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import group from '@/public/Group.png'

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState({
    credentials: false,
    google: false
  })
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const errorParam = searchParams.get('error')
    if (errorParam === 'OAuthAccountNotLinked') {
      setError('An account already exists with this email. Please sign in with your password or use a different Google account.')
    } else if (errorParam === 'CredentialsSignin') {
      setError('Invalid email or password. Please try again.')
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(prev => ({ ...prev, credentials: true }))

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
        callbackUrl: '/innovator/dashboard'
      })

      if (result?.error) {
        setError(result.error === 'CredentialsSignin' 
          ? 'Invalid email or password' 
          : result.error)
      } else {
        router.push(result?.url || '/innovator/dashboard')
      }
    } catch (error) {
      console.error('Sign-in error:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(prev => ({ ...prev, credentials: false }))
    }
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setIsLoading(prev => ({ ...prev, google: true }))

    try {
      const result = await signIn('google', { 
        callbackUrl: '/innovator/dashboard',
        redirect: false
      })

      if (result?.error) {
        setError(result.error)
      } else {
        router.push(result?.url || '/innovator/dashboard')
      }
    } catch (error) {
      console.error('Google sign-in error:', error)
      setError('Failed to sign in with Google. Please try again.')
    } finally {
      setIsLoading(prev => ({ ...prev, google: false }))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg shadow-indigo-200/50 overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please login to continue to your account
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
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

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading.credentials}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading.credentials ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading.credentials ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : 'Sign in'}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading.google}
            className={`w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading.google ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading.google ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              <>
                <Image src={group} width={16} height={16} alt="Google logo" />
                Sign in with Google
              </>
            )}
          </button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin