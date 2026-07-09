import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatMessages({ chatMessages, isMessageLoading }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-container" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
      {isMessageLoading && (
        <ChatMessage isMessageLoading={isMessageLoading} sender="robot" />
      )}
    </div>
  );
}
