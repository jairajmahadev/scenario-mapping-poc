const { Anthropic } = require("@anthropic-ai/sdk");
const dotenv = require('dotenv');

const anthropic = new Anthropic({
    apiKey: process.env.API_KEY, // defaults to process.env["ANTHROPIC_API_KEY"]
  });

let conversationHistory = [];

const singleMessage = async(message) => {
      const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1024,
        system: "Act as an experienced UX researcher with more than 30 years of experience in the e commerce field. Below is a brief given by Ikea to Wongdoody, a design studio, where you're currently working.",
        messages: message,
      });

    return msg;
}

const continuousConversation = async(message) => {
    const claudeResponse = {
        "role": "assistant",
        "content": ""
    }
    conversationHistory.push(message[0]);

    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1024,
        system: "Act as an experienced UX researcher with more than 30 years of experience in the e commerce field. Below is a brief given by Ikea to Wongdoody, a design studio, where you're currently working.",
        messages: message,
      });
    claudeResponse.content = msg.content[0].text
    conversationHistory.push(claudeResponse)

    console.log("conversationHistory", conversationHistory);
    
    return msg;
}

module.exports = { singleMessage, continuousConversation };