import React, { useEffect, useRef } from 'react'
import "./chat.css"
import { LuSend } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import { FaInnosoft } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { RiAttachmentLine } from "react-icons/ri";
const ChatPage = () => {
  const endref = useRef(null)
  useEffect(()=>{
    endref.current.scrollIntoView({behavior:"smooth"})
  },[])
  return (
    <div className='chatter'>
      <div className="wrapper">
        <div className="chats">
          <div className="message user">Test message from user Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores eaque ipsa provident deserunt voluptatibus ut quasi aspernatur adipisci id. Unde eum ipsam explicabo omnis sed illo soluta cum expedita.</div>
          <div className="message">test message from ai Lorem ipsum dolor sit amet consectetur adipisicing elit. At, modi! Velit nesciunt illo deserunt sequi culpa suscipit ratione optio nam! Exercitationem laborum magnam iure reprehenderit, id enim iusto recusandae reiciendis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati aut ea doloribus, dolorem amet provident nulla rem saepe ad libero ullam numquam. Doloremque officia quae dolor numquam! Sequi, vero.suscipit ratione optio nam! Exercitationem laborum magnam iure reprehenderit, id enim iusto recusandae reiciendis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati aut ea doloribus, dolorem amet provident nulla rem saepe ad libero ullam numquam. Doloremque officia quae dolor numquam! Sequi, vero.suscipit ratione optio nam! Exercitationem laborum magnam iure reprehenderit, id enim iusto recusandae reiciendis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati aut ea doloribus, dolorem amet provident nulla rem saepe ad libero ullam numquam. Doloremque officia quae dolor numquam! Sequi, vero.
          </div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">test message from ai Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iure inventore itaque neque consequuntur minima quod ducimus fugit perferendis corrupti quidem repellat accusamus sint aut, nam, voluptas molestiae alias asperiores?</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="end" ref={endref}></div>
          
        </div>
      </div>
      <div className="search">
        <button className='attach'><RiAttachmentLine style={{backgroundColor:"rgb(130,130,130)", width:"30px", height:"30px", borderRadius:"50%", padding:"5px"}}/></button>
        <input type="text" placeholder='Ask Me Anything...'/>
        <button><MdSend style={{backgroundColor:"rgb(200,200,200)",  padding:"5px", width:"35px", fontSize:"30px", borderRadius:"50%",}}/></button>
      </div>
    </div>
  )
}

export default ChatPage
