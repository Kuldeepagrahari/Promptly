import React from 'react'
import "./rootlayout.css"
import Nav from '../../components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missingnlll Publishable Key, jk")
}
const RootLayout = () => {

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

      <Nav></Nav>
      <Outlet />
    </ClerkProvider>
  )
}

export default RootLayout
