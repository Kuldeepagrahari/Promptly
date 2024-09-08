
import {Route, Routes} from "react-router-dom"
import HomePage from "./routes/Home/HomePage.jsx"
import DashBoard from "./routes/DashBoard/DashBoard.jsx"
import ChatPage from "./routes/Chat/ChatPage.jsx"
import Nav from "./components/Nav/Nav.jsx"
import { SignIn } from "@clerk/clerk-react"
import SigninPage from "./routes/SigninPage/SigninPage.jsx"
import SignupPage from "./routes/SignupPage/SignupPage.jsx"
function App() {
 

  return (
    <div className="app">
       <Nav />
       <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/sign-in/*" element={<SigninPage/>}></Route>
        <Route path="/sign-up/*" element={<SignupPage/>}></Route>
        <Route path="/dashboard">
          <Route path="/dashboard" element={<DashBoard/>}></Route>
          <Route path="/dashboard/chat/:id" element={<ChatPage/>}></Route>
        </Route>
       </Routes>
    </div>
  )
}

export default App
