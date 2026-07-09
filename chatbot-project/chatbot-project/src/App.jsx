import { useState } from 'react'

import './App.css'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';







function App() {
        const [isMessageLoading, setLoading] = useState(false);
        const [chatMessages, setChatMessages] = useState([
          {
            message: "Hello Chatbot",
            sender: "user",
            id: crypto.randomUUID(),
          },
          {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: crypto.randomUUID(),
          },
          {
            message: `can you get me today's date`,
            sender: "user",
            id: crypto.randomUUID(),
          },
          {
            message: "Today is June 22",
            sender: "robot",
            id: crypto.randomUUID(),
          },
        ]);
        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
              isMessageLoading={isMessageLoading}
            />
            <ChatInput
              setLoading={setLoading}
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
