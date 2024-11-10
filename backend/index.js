const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { singleMessage, continuousConversation, getFinalResponse, runAllPrompts } = require('./api-example.js');
let { prompts, keyObjectivesVariable } = require('./convoTemplate.js');

// Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/generate', async (req, res) => {
  const { message } = req.body;
  console.log(message);
  
  try {
    const response = await singleMessage(message);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/conversation', async (req, res) => {
  const { message } = req.body;
  try {
    console.log(message);
    
    const response = await continuousConversation(message);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/final', async (req, res) => {
  try {
    // const response = await getFinalResponse();
    let {keyObjectives} = req.body; 
    console.log("keyObjectives", keyObjectives);
    
    keyObjectivesVariable = keyObjectives
    const response = await runAllPrompts(prompts);
    res.status(200).json(response);
    console.log("response", response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});