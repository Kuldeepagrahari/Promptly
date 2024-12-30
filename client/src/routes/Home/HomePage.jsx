import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
import emoji from "../../assets/emoji.png"
import TypeWritter from '../../components/typeWritter/TypeWritter'
const HomePage = () => {

  
  return (
    <div className='home'>
       <video autoPlay loop muted >
        <source src="blackhole.webm" type="video/webm" />
       
      </video>
      {/* <img src="https://img.freepik.com/free-vector/milky-way-planets-collection_23-2148276967.jpg?size=626&ext=jpg&ga=GA1.1.1313162215.1721633016&semt=ais_hybrid" className="orbital" alt="" /> */}
      <div className="left">
        <h1><span>SAM AI</span></h1>
        <h4>Supercharge your creativity and productivity</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sint pariatur accusamus magnam</p>
        <button>
          <Link to="/dashboard">Get Started</Link>
         
        </button>
      </div>
      <div className="right">
        
        <div className="anim-box">
          <div className="bg">
            <div className="bg-anim">

            </div>
          </div>
          <img src={emoji} className="rocket" alt="" />
         
          </div>
          <div className="type"> <TypeWritter /></div>
         
       </div>
    </div>
  )
}

export default HomePage
