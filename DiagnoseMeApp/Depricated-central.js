//Depricated


// import { streamGemini } from './gemini-api.js';

// // let submitBtn = document.querySelector('#submitBtn');
// // let promptInput = document.querySelector('#myTextBox');
// // let greeting = document.querySelector('#greeting');

// // submitBtn.onclick = async (ev) => {
// //   ev.preventDefault();
// //   greeting.textContent = 'Generating...';

// //   try {
// //     let context = 
// //     `
// //     Gemini, you are required keep your single paragraph response to one contiguous block of text.
// //     `;
// //     let contents = [
// //       {
// //         role: 'user',
// //         parts: [
// //           { text: context + promptInput.value }
// //         ]
// //       }
// //     ];

// //     console.log('Sending message to Gemini:', contents[0].parts[0].text);

// //     // Call the gemini-pro, and get a stream of results
// //     let stream = streamGemini({
// //       model: 'gemini-pro',
// //       contents,
// //     });

// //     // Read from the stream and interpret the output as markdown
// //     let buffer = [];
// //     for await (let chunk of stream) {
// //       buffer.push(chunk);
// //       greeting.textContent = buffer.join('');
// //     }
// //   } catch (e) {
// //     greeting.textContent += ' ' + e;
// //   }
// // };

