import mongoose from "mongoose"
const ConnectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
    } catch (error) {
        console.log(error + " mongodb is not connected")
    }
}
export default ConnectDB

