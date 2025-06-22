import { GoogleGenAI } from "@google/genai";
import readlinesync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBXOBNkzGWrBdFNlcFPszIK7-uiocW83mo",
});

const History = [];

async function chatting(userproblem) {
  History.push({
    role: "user",
    parts: [{ text: userproblem }],
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
  });
  History.push({
    role: "model",
    parts: [{ text: response.text }],
  });
  console.log("/n");
  console.log(response.text);
}

async function main() {
  const userproblem = readlinesync.question("Ask me Any thing ");
  await chatting(userproblem);
  main();
}

main();
