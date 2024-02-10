import { streamGemini } from './gemini-api.js';

let submitBtn = document.querySelector('#submitBtn');
let promptInput = document.querySelector('#myTextBox');
let greeting = document.querySelector('#greeting');

let contents = []; // Move contents array outside the onclick function to maintain state

submitBtn.onclick = async (ev) => {
  ev.preventDefault();
  greeting.textContent = 'Generating...';

  try {
    let context = 
    `
    Gemini, you are required keep your single paragraph response to one contiguous block of text.
    `;

    // Add user's message to contents
    contents.push({
      role: 'user',
      parts: [
        { text: context + promptInput.value }
      ]
    });

    console.log('Sending message to Gemini:', contents[contents.length - 1].parts[0].text);

    // Call the gemini-pro, and get a stream of results
    let stream = streamGemini({
      model: 'gemini-pro',
      contents,
    });

    // Read from the stream and interpret the output as markdown
    let buffer = [];
    for await (let chunk of stream) {
      buffer.push(chunk);
      greeting.textContent = buffer.join('');
    }

    // Add model's response to contents
    contents.push({
      role: 'model',
      parts: [
        { text: buffer.join('') }
      ]
    });
  } catch (e) {
    greeting.textContent += ' ' + e;
  }
};