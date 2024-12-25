import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout/RootLayout.jsx'
import HomePage from './routes/Home/HomePage.jsx'
import SigninPage from './routes/SigninPage/SigninPage.jsx'
import SignupPage from './routes/SignupPage/SignupPage.jsx'
import DashLayout from './Layouts/DashboardLayout/DashLayout.jsx'
import ChatPage from './routes/Chat/ChatPage.jsx'
import DashBody from './components/Dashboard-body/DashBody.jsx'


const router = createBrowserRouter([{
  element: <RootLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/sign-in/*",
      element: <SigninPage />
    },
    {
      path: "/sign-up/*",
      element: <SignupPage />
    },
    {
      element: <DashLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashBody />
        },
        {
          path: "/dashboard/chat/:id",
          element: <ChatPage />
        },
      ]
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>,
)
