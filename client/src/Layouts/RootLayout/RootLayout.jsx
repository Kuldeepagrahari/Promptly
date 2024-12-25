import React from 'react'
import "./rootlayout.css"
import Nav from '../../components/Nav/Nav'
import { Outlet } from 'react-router-dom'
const PUBLISHABLE_KEY = "pk_test_YXB0LWdhcmZpc2gtMC5jbGVyay5hY2NvdW50cy5kZXYk"
import { ClerkProvider } from '@clerk/clerk-react'
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
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
