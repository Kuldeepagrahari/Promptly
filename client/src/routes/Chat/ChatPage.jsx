import React, { useEffect, useRef, useState } from 'react';
import { IKImage } from 'imagekitio-react';
import "./chat.css";
import { MdSend } from "react-icons/md";
import Upload from '../../components/upload/Upload';
import model from '../../lib/gemini';
import Markdown from "react-markdown";
import { useLocation } from 'react-router-dom';

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const endref = useRef(null);
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const [chatting, setChat] = useState([]);
 
  // Fetch chat history
  const getChat = async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetch(`http://localhost:106/api/chat/${chatId}`, {
        credentials: "include",
      });
      if (data.ok) {
        const chat = await data.json();
        setChat(chat);
        // if(chat[0].history[0].parts.length === 1)
        // setPrompt(chat[0].history[0].parts[0].text)
      
      
      } else {
        console.error("Error fetching chat data");
      }
    } catch (error) {
      console.error("Error in getChat: ", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  

  useEffect(() => {
    endref.current.scrollIntoView({ behavior: "smooth" });
  }, [response, chatting, prompt, img.dbData]);

  const chat = model.startChat();

  // Add prompt and response
  const add = async () => {
    setLoading(true); // Start loading
    try {
      const prompts = prompt;
      console.log("Sending prompt: ", prompts);

      const result = await chat.sendMessage(prompts);
      if (result?.response?.text) {
        setResponse(result.response.text());
        console.log("Processed response: ", result.response.text());

        // Update the chat in the database
        await fetch(`http://localhost:106/api/chat/${chatId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            prompt,
            response: result.response.text(),
          }),
        });

        // Refresh the chat history
        getChat();
      } else {
        console.error("Invalid response format: ", result);
      }
    } catch (error) {
      console.error("Error in add function: ", error);
    } finally {
      setLoading(false); // End loading
    }
  };
useEffect(() => {
  add()
}, [prompt])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.promptInput.value;
    if (!text) return;
    setPrompt(text);
    // add();
  };

  return (
    <div className="chatter">
      <div className="wrapper">
        <div className="chats">
          {loading ? (
            <div className="loading">Loading...</div> // Display loading indicator
          ) : (
            chatting.map((chat, chatIndex) => (
              <div key={chat._id || chatIndex}>
                {chat.history.map((historyItem, historyIndex) => (
                  <div key={historyIndex}>
                    {historyItem.parts.map((part, partIndex) => (
                      <div
                        className={
                          historyItem.role === "user" ? "message user" : "message"
                        }
                        key={part._id || partIndex}
                      >
                        <Markdown>{part.text}</Markdown>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))
          )}
          {prompt && <div className="message user"><Markdown>{prompt}</Markdown></div>}
          {response && <div className="message"><Markdown>{response}</Markdown></div>}
          {img.isLoading ? (
            <div>Loading...</div>
          ) : (
            img.dbData?.filePath && (
              <IKImage
                urlEndpoint="https://ik.imagekit.io/wvihthnsz"
                path={img.dbData?.filePath}
              />
            )
          )}
          <div className="end" ref={endref}></div>
        </div>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <Upload setImg={setImg} />
          <input name="promptInput" type="text" placeholder="Ask Me Anything..." />
          <button type="submit">
            <MdSend
              style={{
                backgroundColor: "rgb(200,200,200)",
                padding: "5px",
                width: "35px",
                fontSize: "30px",
                borderRadius: "50%",
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
