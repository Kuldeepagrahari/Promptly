import { Schema, model } from "mongoose";

const UserChatsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    chats: [
      {
        _id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },

        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

const UserChats = new model("userchats", UserChatsSchema);
export default UserChats
