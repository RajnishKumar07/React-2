import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

  export function ChatInput({ chatMessages, setChatMessages, setLoading }) {
        const [inputText, setInputText] = useState("");
        function saveInputText(event) {
          const value = event.target.value;
          setInputText(value);
        }

        function sendMessage() {
          if (!inputText.trim()) return;

          const text = inputText;

          setInputText("");
          setLoading(true);

          setChatMessages((prev) => [
            ...prev,
            {
              message: text,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ]);

          setTimeout(() => {
            const botResponse = Chatbot.getResponse(text);

            setChatMessages((prev) => [
              ...prev,
              {
                message: botResponse,
                sender: "robot",
                id: crypto.randomUUID(),
              },
            ]);

            setLoading(false);
          }, 2000);
        }
        return (
          <div className="input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-btn">
              Send
            </button>
          </div>
        );
      }