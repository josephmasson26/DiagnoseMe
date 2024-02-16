// Importing React library
import React from 'react';

// Defining the ActionProvider component
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // Defining the actions object
  const actions = {
    // Function to set the API response
    setApiResponse: (response) => {
      // Creating a chat bot message using the provided response
      const message = createChatBotMessage(response);
      // Updating the state by adding the new message to the existing messages array
      setState(state => ({ ...state, messages: [...state.messages, message] }));
    },
  };

  // Returning the component with children and actions passed as props
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: actions,
        });
      })}
    </div>
  );
};

// Exporting the ActionProvider component as the default export
export default ActionProvider;