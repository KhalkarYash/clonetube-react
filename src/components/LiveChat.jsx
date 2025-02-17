import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { nameList, generateRandomText } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  function generate() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }

  useEffect(() => {
    // API Polling
    const pollingTime = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: generateRandomText(20) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(pollingTime);
  }, []);

  return (
    <div className="w-auto h-[500px] mx-2 border border-[rgba(255,255,255,0.1)] rounded-lg">
      <h1 className="bg-[rgba(255,255,255,0.05)] py-2 px-4 text-lg">
        Live Chat
      </h1>
      <div className="py-2 px-4 h-[410px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.length > 0 &&
          chatMessages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              message: messages + " 🚀",
            })
          );
          setMessages("")
        }}
        className="bg-[rgba(255,255,255,0.05)] py-2 px-4 text-lg flex"
      >
        <input
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          type="text"
          className="w-full outline-none"
          placeholder="Your message here"
        />
        <button className="ml-2">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
