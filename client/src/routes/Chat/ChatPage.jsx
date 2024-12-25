import React, { useEffect, useRef, useState } from 'react'
import { IKImage } from 'imagekitio-react';
import "./chat.css"
import { MdSend } from "react-icons/md";
import Upload from '../../components/upload/Upload';
import model from '../../lib/gemini';
import Markdown from "react-markdown"
const ChatPage = () => {
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {}
  });
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const endref = useRef(null)
  useEffect(() => {
    endref.current.scrollIntoView({ behavior: "smooth" })
  }, [response, prompt, img.dbData])
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });
  const add = async () => {
    const prompts = prompt;
    console.log("prompt" + prompts)

    const result = await chat.sendMessage(prompts);
    // console.log(result.response.text());
    setResponse(result.response.text());
    console.log(response)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = e.target.promptInput.value
    if (!text) return;
    setPrompt(text)
    add()
  }
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
          {prompt && <div className="message user">{prompt}</div>}
          {response && <div className="message"><Markdown>{response}</Markdown></div>}

          {/* <img src="https://ik.imagekit.io/demo/default-image.jpg?ik-sdk-version=react-1.x.x" alt=""></img> */}


          {img.isLoading ? <div className="">Loading...</div> :
            img.dbData?.filePath && (<IKImage
              urlEndpoint="https://ik.imagekit.io/wvihthnsz"
              path={img.dbData?.filePath}
            />)}
          <div className="end" ref={endref}></div>
          hey ask me..
        </div>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <Upload setImg={setImg} />

          <input name="promptInput" type="text" placeholder='Ask Me Anything...' />
          <button type='submit'><MdSend style={{ backgroundColor: "rgb(200,200,200)", padding: "5px", width: "35px", fontSize: "30px", borderRadius: "50%", }} /></button>
        </form>
      </div>
    </div>
  )
}

export default ChatPage
