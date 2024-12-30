import { Schema, model } from "mongoose";

const ChatSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    history: [
      {
        role: {
          type: String,
        //   enum: ["user" | "model"],
        },
        parts: [
          {
            text: {
              type: String,
              required: true,
            },
          },
        ],
        img: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Chat = new model("chat", ChatSchema);
export default Chat;
