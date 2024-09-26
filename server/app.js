import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import ImageKit from "imagekit"
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });
app.use(cors({
    origin:"http://localhost:5173",
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
app.listen(PORT, ()=>{
    console.log(`your app is running on ${PORT}`)
})