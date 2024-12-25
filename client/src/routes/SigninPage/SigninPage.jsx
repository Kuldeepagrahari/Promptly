import React from 'react'
import "./signin.css"
import { SignedIn, SignedOut, SignInButton, UserButton , SignIn} from "@clerk/clerk-react";
const SigninPage = () => {
  return (
    <div className='signin'>
      <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl="/dashboard"></SignIn>
    </div>
  )
}

export default SigninPage
