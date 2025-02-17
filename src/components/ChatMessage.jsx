const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-[rgba(255,255,255,0.05)] shadow-sm py-1 text-xs">
      <img
        className="w-4 mx-2 rounded-full h-fit items-center"
        src="https://robohash.org/mail@ashallendesign.co.uk"
      />
      <span className="w-fit mx-2 font-bold">{name}</span>
      <span className="mx-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
