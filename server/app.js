import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import Chat from "./models/chat.js"
import UserChats from "./models/userChats.js"
import ImageKit from "imagekit"
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node'
  
import ConnectDB from "./util/db.js"

app.use(express.json())
app.use(cors({
    origin:"https://promptly-pk2h.onrender.com/",
    credentials: true
}))
const PORT = process.env.PORT || 106
app.get("/", (req, res)=>{
    res.send("Welcome Sam")
})

app.get("/api/upload", (req, res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.post("/api/chats", ClerkExpressRequireAuth(), async (req, res) => {
    const { text } = req.body;
    const userId = req.auth.userId
    try {
            const newChat = await Chat.create({
            userId: userId,
            history:[{role:"user", parts:[{text}]}]
        })

        // checking if the users prev chats exists means new user or old user

        const IsUserChatExists = await UserChats.find({userId: userId})

        if ( !IsUserChatExists.length ){
            const newUserChats = await UserChats.create({
             userId: userId,
             Chats:[{
               _id:newChat._id,
               title:
                text.substring(0, 40)
               
             }]
            })
         
        }else{
            // if exists push the new chat into that
            await UserChats.updateOne(
                {userId: userId},
                {
                    $push: {
                        chats: {
                            _id: newChat._id,
                            title: text.substring(0, 40),
                        }
                    }
                }
            )
        }
        res.send(newChat._id)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error creating a chat")
    }
})
app.get("/api/userChats", ClerkExpressRequireAuth(), async(req, res)=>{
    
    try {
        const userId = req.auth.userId
        const userchats = await UserChats.find({userId})
        res.json(userchats)
    } catch (error) {
        console.error(error)
    }
})
app.get("/api/chat/:id", ClerkExpressRequireAuth(), async(req, res)=>{
    try {
        const chatId = req.params.id
        const userId = req.auth.userId
        const chat = await Chat.find({_id:chatId, userId: userId})
        res.json(chat)
       
    } catch (error) {
        console.error(error)
    }
})
app.put("/api/chat/:id", ClerkExpressRequireAuth(), async (req, res) => {
    const { id: chatId } = req.params; // Extract chat ID from URL
    const { prompt, response, img } = req.body; // Optional image path from ImageKit
    const userId = req.auth.userId;
  
    if (!prompt || !response) {
      return res.status(400).send("Prompt and response are required.");
    }
  
    try {
      // Fetch the existing chat
      const chat = await Chat.findOne({ _id: chatId, userId });
  
      if (!chat) {
        return res.status(404).send("Chat not found.");
      }
  
      // Append the new user message and AI response to the history
      chat.history.push(
        { role: "user", parts: [{ text: prompt }], ...(img ? { img } : {}) },
        { role: "model", parts: [{ text: response }] }
      );
  
      // Save the updated chat
      await chat.save();
  
      res.status(200).json({ message: "Chat updated successfully.", chat });
    } catch (error) {
      console.error("Error updating chat: ", error);
      res.status(500).send("Internal server error.");
    }
  });
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(401).send('Unauthenticated!')
  })
  


 ConnectDB().then (()=>
    app.listen(PORT, ()=>{
    
        console.log(`your app is running on ${PORT}`)
    })

)