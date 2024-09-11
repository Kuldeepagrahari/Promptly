import React, {useState, useRef} from 'react'
import "./dash.css"
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import ChatPage from '../Chat/ChatPage.jsx'
import DashBody from '../../components/Dashboard-body/DashBody.jsx'

import { FaInnosoft } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import "../../components/Sidebar/side.css"
// import { useState } from "react"
const DashBoard = () => {
  const activeRef = useRef(null)
  const [active, setActive] = useState("dashbody")
  return (
    <div className='dash'>
      <div className="sidebar">
      <div className='side'>
       {/* <NavLink to="/" className="logo"><FaInnosoft style={{fontSize:"25px"}}/><span>Sam AI</span></NavLink> */}
       <h1 onClick={() => setActive("dashbody")}>DASHBOARD</h1>
       <div className="dashlist">
       
        <Link to="">Create a new Chat</Link>
        <Link to="">Explore Sam AI</Link>
        <Link to ="">Contact Sam AI</Link>
       </div>
       <hr />
       <h1>RECENT CHATS</h1>
       <div className="chatlist">

        <Link onClick={()=>setActive("chats")}to="">what is React Js, give..</Link>
        <Link to="">give me an image to..</Link>
        <Link to="">correct my c++ code..</Link>
        {/* <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link> */}
        {/* <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link>
        <Link to="">My chat name</Link> */}
       </div>
       <hr />
       <div className="upgrade">
        <FaInnosoft style={{fontSize:"40px"}}/>
        <div className='upgrade-text'>
        <Link to="">Upgrade to Pro</Link>
        <p>Get unlimited access to all features</p>
        </div>
       </div>
    </div>
      </div>
      <div className="chat-content">
      { (active=="dashbody") ?<DashBody/>:<ChatPage/>}
       {/* <DashBody /> */}
      </div>
    </div>
  )
}

export default DashBoard
