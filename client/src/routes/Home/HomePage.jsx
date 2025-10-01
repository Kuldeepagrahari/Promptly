import React from 'react'
import { Link } from "react-router-dom"
import "./home.css"
import emoji from "../../assets/emoji.png"
import TypeWritter from '../../components/typeWritter/TypeWritter'
const HomePage = () => {


  return (
    <div className='home'>
      <video autoPlay loop muted >
        <source src="blackhole.webm" type="video/webm" />

      </video>

      <div className="left">
        <h1><span>Promptly</span></h1>
        <h4>Supercharge your creativity and productivity</h4>
        <p>just upload a picture or give a prompt, it will provide you the tutorial to learn the topics, debug code, generate code, help for creativity, lengthy manual text works and much more.</p>
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
