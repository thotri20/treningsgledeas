"use client"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-purple-800 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-white">
          Treningsglede AS
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-teal-400 transition">
                Logg Inn
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-teal-400 transition">
                Bli Medlem
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            {/* Hamburger menu */}
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 border rounded text-white border-white hover:bg-purple-700"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Åpne meny"
              >
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <title>Meny</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
                  <Link
                  href="/"
                  className="block px-4 py-2 text-purple-800 hover:bg-teal-100"
                    onClick={() => setMenuOpen(false)}>

                    Hjem
                  </Link>
                  <Link
                    href="/treningsokt"
                    className="block px-4 py-2 text-purple-800 hover:bg-teal-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Treningsøkter
                  </Link>
                  <div className="px-4 flex py-2 border-t">
                    <UserButton afterSignOutUrl="/" />
                    <p className="ml-2 text-purple-800">
                      Profil
                    </p>
                  </div>
                </div>
              )}
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}