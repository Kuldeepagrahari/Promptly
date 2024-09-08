import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
import emoji from "../../assets/emoji.png"
const HomePage = () => {
  return (
    <div className='home'>
      {/* <img src="https://t3.ftcdn.net/jpg/05/65/54/28/240_F_565542896_nT4m3Y8qCwfQAQq5pfZZhkGod8Oyv7Hw.jpg" className="orbital" alt="" /> */}
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
       </div>
    </div>
  )
}

export default HomePage
