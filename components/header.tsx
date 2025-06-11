import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Header() {
    return(
        <div>
        <div className='flex'>
        <>
        <div className='font-semibold'>
             <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            </div>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </>
        </div>
        </div>
    )
}