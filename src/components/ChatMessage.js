import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-md">
        <img
          className="h-8"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="chat-logo"
        />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
