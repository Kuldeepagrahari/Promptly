import React from 'react'
import "./dash-body.css"
import { LuSend } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import { FaInnosoft } from "react-icons/fa";
import { MdSend } from "react-icons/md";
const DashBody = () => {
  return (
    <div className='chat'>
      <div className="text">
        <div className="name">
          <FaInnosoft style={{fontSize:"45px"}} /> <span>SAM AI</span> 
        </div>
        <div className="boxes">
          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/128/13333/13333713.png" alt="" />
            <p>Create a new chat</p>
          </div>
          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/128/16878/16878840.png" alt="" />
            <p>Analyze Images</p>
          </div>
          <div className="box">
            <img src="https://cdn-icons-png.flaticon.com/128/1157/1157109.png" alt="" />
            <p>Help me with my code</p>
          </div>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder='Ask Me Anything...'/>
        <button><MdSend style={{backgroundColor:"rgb(200,200,200)",  padding:"5px", width:"35px", fontSize:"30px", borderRadius:"50%",}}/></button>
      </div>
    </div>
  )
}

export default DashBody
