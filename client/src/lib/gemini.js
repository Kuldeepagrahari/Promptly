// // Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

// // ...

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//   },
// ];
// console.log("api key" + import.meta.env.VITE_GEMINI_API_KEY)

// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" , safetySettings});

// export default model
import { GoogleGenerativeAI } from "@google/generative-ai";

// Optional: configure safety settings on usage if needed

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY, { apiVersion: "v1beta" });
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// export const generateResponse = async (prompt) => {
//   const result = await model.generateContent({
//     contents: [{ role: "user", parts: [{ text: prompt }] }],
//     safetySettings,
//   });

//   return result.response.text();
// };
export default model;