import React from 'react'
import "./dash.css"
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import ChatPage from '../Chat/ChatPage.jsx'
import DashBody from '../../components/Dashboard-body/DashBody.jsx'
const DashBoard = () => {
  return (
    <div className='dash'>
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="chat-content">
       <DashBody />
      </div>
    </div>
  )
}

export default DashBoard
