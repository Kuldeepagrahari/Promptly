import React from 'react'
import "./signup.css"
import { SignUp } from '@clerk/clerk-react'
const SignupPage = () => {
  return (
    <div className='signup'>
      <SignUp path="/sign-up"  signInUrl='/sign-in'></SignUp>
    </div>
  )
}

export default SignupPage
