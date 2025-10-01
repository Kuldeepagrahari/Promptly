import React from 'react'
import "./dash-body.css"
import { LuSend } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import { FaInnosoft } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { RiAttachmentLine } from "react-icons/ri";
import Upload from '../upload/Upload.jsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
const DashBody = () => {
  const navigate = useNavigate()
  const {getToken} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = e.target.text.value;
 
    if ( !text )return;

    const token = await getToken()
    const response = await fetch("https://promptly-backend-n0ef.onrender.com/api/chats", {
     method:"POST",
     headers:{
       "Content-Type":"application/json",
       Authorization: `Bearer ${token}`
    },
    body:JSON.stringify({text})
   })
   const data = await response.json()
   // console.log(data)
   navigate(`/dashboard/chat/${data}`)
 }
  return (
    <div className='chat'>
      <div className="text">
        <div className="name">
          <FaInnosoft style={{fontSize:"45px"}} /> <span>Promptly</span> 
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
      
        <form onSubmit={handleSubmit}>
        
        <input type="text" name = "text" placeholder='Name Your Chat' />
        <button onSubmit={ () => navigate("/dashboard/chat/12")}><MdSend style={{backgroundColor:"rgb(200,200,200)",  padding:"5px", width:"35px", fontSize:"30px", borderRadius:"50%",}}/></button>
        </form>
      </div>
    </div>
  )
}

export default DashBody
