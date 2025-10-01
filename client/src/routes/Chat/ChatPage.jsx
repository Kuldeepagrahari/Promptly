import React, { useEffect, useRef, useState } from 'react';
import { IKImage } from 'imagekitio-react';
import "./chat.css";
import { MdSend } from "react-icons/md";
import Upload from '../../components/upload/Upload';
import model from '../../lib/gemini';
import Markdown from "react-markdown";
import { useLocation } from 'react-router-dom';
import { useAuth }  from '@clerk/clerk-react';

const ChatPage = () => {
  const {getToken} = useAuth()
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
      const token = await getToken()
      const data = await fetch(`http://localhost:106/api/chat/${chatId}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // ✅ attach token
        },
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

  // Load chat history when chatId changes or on mount
  useEffect(() => {
    if (chatId) {
      getChat();
    }
  }, [chatId]);

  // Keep a stable Gemini chat session across renders
  const chatRef = useRef(null);
  useEffect(() => {
    if (!chatRef.current) {
      try {
        chatRef.current = model.startChat();
      } catch (err) {
        console.error("Failed to start chat session:", err);
      }
    }
  }, []);

  // Add prompt and response
  const add = async () => {
    setLoading(true);
    try {
      const prompts = prompt;
      if (!prompts) {
        setLoading(false);
        return;
      }
      if (!chatRef.current) {
        chatRef.current = model.startChat();
      }
      // If an image was uploaded, attach it as inlineData for multimodal analysis
      let result;
      if (img?.dbData?.filePath) {
        const fullUrl = `https://ik.imagekit.io/wvihthnsz/${img.dbData.filePath}`;
        const base64Data = await (async () => {
          const res = await fetch(fullUrl);
          const blob = await res.blob();
          const arrayBuffer = await blob.arrayBuffer();
          const bytes = new Uint8Array(arrayBuffer);
          let binary = "";
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return btoa(binary);
        })();
        const mimeType = "image/*";
        result = await chatRef.current.sendMessage([
          { text: prompts },
          { inlineData: { data: base64Data, mimeType } },
        ]);
      } else {
        result = await chatRef.current.sendMessage(prompts);
      }
  
      if (result?.response?.text) {
        const reply = result.response.text();
        setResponse(reply);
  
        const token = await getToken();  // ✅ get token
        await fetch(`http://localhost:106/api/chat/${chatId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // ✅ include here too
          },
          body: JSON.stringify({
            prompt,
            response: reply,
            img: img?.dbData?.filePath || undefined,
          }),
        });
  
        await getChat(); // refresh history
        // Reset image state so future prompts don't reuse the previous image
        setImg({ isLoading: false, error: "", dbData: {} });
      } else {
        console.error("Invalid response format: ", result);
      }
    } catch (error) {
      console.error("Error in add function: ", error);
    } finally {
      setLoading(false);
    }
  };
  
useEffect(() => {
  if (prompt) {
    add()
  }
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
                    {historyItem.role === "user" && historyItem.img && (
                      <IKImage
                        urlEndpoint="https://ik.imagekit.io/wvihthnsz"
                        path={historyItem.img}
                        transformation={[{ width: 400, height: 300 }]}
                        loading="lazy"
                        lqip={{ active: true, quality: 20 }}
                        style={{ maxWidth: "400px", height: "auto", borderRadius: "8px" }}
                      />
                    )}
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
          {/* Remove optimistic local echo to avoid duplicate render; rely on fetched history */}
          {img.isLoading ? (
            <div>Loading...</div>
          ) : (
            img.dbData?.filePath && (
              <IKImage
                urlEndpoint="https://ik.imagekit.io/wvihthnsz"
                path={img.dbData?.filePath}
                transformation={[{ width: 400, height: 300 }]}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                style={{ maxWidth: "400px", height: "auto", borderRadius: "8px" }}
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
