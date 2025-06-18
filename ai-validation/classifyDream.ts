mport { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function classifyDream(dreamName: string): Promise<string> {
  const prompt = ⁠ Classify the dream as Good or Bad: "${dreamName}" ⁠;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const text = response.data.choices[0].message?.content?.toLowerCase();
  return text.includes("bad") ? "Bad" : "Good";
}
