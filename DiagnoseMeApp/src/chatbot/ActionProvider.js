import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const actions = {
    setApiResponse: (response) => {
      const message = createChatBotMessage(response);
      setState(state => ({ ...state, messages: [...state.messages, message] }));
    },
  };

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

export default ActionProvider;