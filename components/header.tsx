import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
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
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
