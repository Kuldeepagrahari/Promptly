import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInnosoft } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./nav.css"
import SigninPage from '../../routes/SigninPage/SigninPage';
const Nav = () => {
  return (
    <div className='nav'>
    <header>
      <NavLink to="/" className="logo"><FaInnosoft/><span>Sam AI</span></NavLink>
      <NavLink><SignedOut>
        <NavLink to="/sign-in">Login</NavLink>
        {/* <SignInButton /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn></NavLink>
    </header>
    </div>
  )
}

export default Nav
