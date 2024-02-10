import { streamGemini } from './gemini-api.js';

let submitBtn = document.querySelector('#submitBtn');
let promptInput = document.querySelector('#myTextBox');
let greeting = document.querySelector('#greeting');

submitBtn.onclick = async (ev) => {
  ev.preventDefault();
  greeting.textContent = 'Generating...';

  try {
    // Assemble the prompt by combining the text with the chosen image
    let contents = [
      {
        role: 'user',
        parts: [
          { text: promptInput.value }
        ]
      }
    ];

    // Call the gemini-pro-vision model, and get a stream of results
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
  } catch (e) {
    greeting.textContent += ' ' + e;
  }
};

