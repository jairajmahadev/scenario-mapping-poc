const { Anthropic } = require("@anthropic-ai/sdk");
const {prompts, context} = require("./convoTemplate");

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
    const formattedMessage = {
        "role": "user",
        "content": message
    }

    conversationHistory.push(formattedMessage);
    // console.log("conversationHistory", conversationHistory);
    

    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1024,
        system: "Act as an experienced UX researcher with more than 30 years of experience in the e commerce field. Below is a brief given by Ikea to Wongdoody, a design studio, where you're currently working.",
        messages: conversationHistory,
      });
    claudeResponse.content = msg.content[0].text
    conversationHistory.push(claudeResponse)

    // console.log("conversationHistory", conversationHistory);
    
    return msg;
}

const getFinalResponse = async() => {
  const responses = []
  Object.values(prompts).forEach(async(prompt) => {
    console.log("prompt", prompt);
    
    const response = await continuousConversation(prompt);
    responses.push(response);
  });
  console.log("responses", responses);
  return responses;
  
}

// const conversationHistory = []; // Initialize conversation history
const outputs = {}; // Object to store outputs

const runAllPrompts = async (prompts) => {
    for (const [key, prompt] of Object.entries(prompts)) {
        try {
            const result = await continuousConversation(prompt);
            outputs[key] = result; // Save the result under the corresponding prompt key
        } catch (error) {
            console.error(`Error processing ${key}:`, error);
            outputs[key] = { error: error.message }; // Save error details
        }
    }
    return outputs;
};



module.exports = { singleMessage, continuousConversation, getFinalResponse, runAllPrompts };