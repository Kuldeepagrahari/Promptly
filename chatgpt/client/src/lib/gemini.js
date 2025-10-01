import { GoogleGenerativeAI } from "@google/generative-ai";

// Use API version and a currently supported model
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY, { apiVersion: "v1beta" });

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export default model;
