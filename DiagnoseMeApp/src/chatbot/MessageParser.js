import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
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
    .then(response => response.text())
    .then(data => {
      const jsonString = data.replace('data: ', '');
      const parsedData = JSON.parse(jsonString);
      actions.setApiResponse(parsedData.text);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
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
