import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const inputRef = useRef();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message:
            "Hello " + generateRandomName() + " " + generateRandomMessage(),
        })
      );
    }, 2500);

    return () => {
      clearInterval(i);
    };
  }, []);

  const postChatMessage = ()=>{
    dispatch(
        addMessage({
          name: generateRandomName(),
          message: inputRef.current.value
        })
      );
      inputRef.current.value = "";
  }

  if (messages.length === 0) return;

  return (
    <div>
      <div className="m-2 p-2 w-full h-[415px] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages.map((m, index) => (
          <ChatMessage key={index} name={m.name} message={m.message} />
        ))}
      </div>
      <div className="w-full">
        <input ref={inputRef} className="m-2 p-2 w-[80%] border border-black rounded-lg" type="text" />
        <button onClick={postChatMessage} className="p-2 bg-gray-600 rounded-lg shadow-lg">Send</button>
      </div>
    </div>
  );
};

export default LiveChat;
