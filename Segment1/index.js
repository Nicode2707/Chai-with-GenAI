import { GoogleGenAI } from "@google/genai";
import readlinesync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBXOBNkzGWrBdFNlcFPszIK7-uiocW83mo",
});
 const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history:[],
 })



async function main() {
  const userproblem = readlinesync.question("Ask me Any thing ");
 const response1 = await chat.sendMessage({
    message: "userproblem",
  });
  console.log(response1.text);
  main();
}

main();
