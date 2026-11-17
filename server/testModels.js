const { GoogleGenAI } = require('@google/genai');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function listModels() {
  try {
    const models = await ai.models.list();
    for await (const model of models) {
      console.log(model.name);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

listModels();
