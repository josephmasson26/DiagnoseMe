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
