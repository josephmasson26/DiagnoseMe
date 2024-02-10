// Importing React library
import React from 'react';

// MessageParser component
const MessageParser = ({ children, actions }) => {
  // parse function to send message to the server and handle the response
  const parse = (message) => {
    // Sending a POST request to the server at http://127.0.0.1:5000
    fetch('http://127.0.0.1:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gemini-pro',
        contents: [
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ]
      })
    })
    `This code snippet demonstrates how to process a stream of data in JavaScript using the getReader() method of the Response object.

    The getReader() method returns a ReadableStreamDefaultReader object, which allows us to read the data from the response stream in chunks.

    The reader.read() method is used to read a chunk of data from the stream. It returns a promise that resolves to an object containing two properties: done and value.
    - The done property indicates whether the stream has been fully read or not.
    - The value property contains the actual data chunk read from the stream.

    The code uses a recursive function called process to read and process the data chunks from the stream.
    - The process function takes the done and value properties as its parameters.
    - If the done property is true, it means that the stream has been fully read, so the function returns.
    - If the done property is false, it means that there is more data to be read from the stream.
      - The code decodes the data chunk using TextDecoder() and removes the prefix 'data: ' from the chunk.
      - Then, it parses the resulting JSON string into an object using JSON.parse().
      - Finally, it sets the parsed data to some action using actions.setApiResponse(parsedData.text).

    After processing the current chunk, the code calls reader.read().then(process) recursively to read the next chunk from the stream.
    This ensures that the stream is not cut off early because the process function is only called when the previous chunk has been fully processed.

    In summary, this code snippet reads and processes a stream of data by recursively calling a function to read and handle each data chunk until the stream is fully read.`
    .then(response => {
      const reader = response.body.getReader();
      reader.read().then(function process({ done, value }) {
        if (done) return;
        const chunk = new TextDecoder().decode(value);
        const jsonString = chunk.replace('data: ', '');
        const parsedData = JSON.parse(jsonString);
        actions.setApiResponse(parsedData.text);
        return reader.read().then(process);
      });
    })
    .catch(error => console.error('Error:', error)); // Handling any errors that occur during the request
  };

  return (
    <div>
      {/* Cloning and rendering the child components */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
