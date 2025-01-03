'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
                <h3 className="text-2xl font-bold text-green">Ideavate fund</h3>
              </div>
            </div>
            <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className="rounded-md bg-green px-4 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-md px-4 py-2 text-sm font-medium text-dark hover:bg-green hover:text-white"
                  >
                    About
                  </Link>
                  <a
                    href="/workflow"
                    className="rounded-md px-4 py-2 text-sm font-medium text-dark hover:bg-green hover:text-white"
                  >
                    Work Flow
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-4 py-2 text-sm font-medium text-dark hover:bg-green hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className=" hidden sm:block relative rounded-full  p-1 text-dark hover:text-green focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Log in
              </button>
              <div className="relative ml-3">
                <div>
                  <button
                  
                    type="button"
                    className="hidden sm:block relative flex rounded-md bg-green p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <div className=" sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                className="block rounded-md bg-green px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-green hover:text-white"
              >
                About
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-green hover:text-white"
              >
                Work Flow
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-green hover:text-white"
              >
                Contact
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-green hover:text-white"
              >
                Login
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-green hover:text-white"
              >
                Sign up
              </a>

            </div>
                
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
