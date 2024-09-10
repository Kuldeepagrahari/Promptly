import React from 'react'
import { FaInnosoft } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import "./side.css"
const Sidebar = () => {
  return (
    <div className='side'>
       <NavLink to="/" className="logo"><FaInnosoft style={{fontSize:"25px"}}/><span>Sam AI</span></NavLink>
       <h1>DASHBOARD</h1>
       <div className="dashlist">
       
        <Link to="">Create a new Chat</Link>
        <Link to="">Explore Sam AI</Link>
        <Link to ="">Contact Sam AI</Link>
       </div>
       <hr />
       <h1>RECENT CHATS</h1>
       <div className="chatlist">

        <Link to="">what is React Js, give..</Link>
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
  )
}

export default Sidebar
