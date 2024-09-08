import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import dotenv from "dotenv"
// dotenv.config()
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = "pk_test_YXB0LWdhcmZpc2gtMC5jbGVyay5hY2NvdW50cy5kZXYk"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
