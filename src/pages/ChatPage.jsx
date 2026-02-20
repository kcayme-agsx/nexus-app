import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";
import { useAuth } from "../contexts/AuthContext";

const quickActions = [
  { icon: "storefront", label: "Find Store" },
  { icon: "local_parking", label: "Parking" },
  { icon: "wc", label: "Restrooms" },
  { icon: "restaurant", label: "Restaurants" },
  { icon: "atm", label: "ATM" },
  { icon: "support_agent", label: "Help" },
];

export default function ChatPage() {
  const { user } = useAuth();
  const messagesEndRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: `Hi ${user?.fullName.split(' ')[0] || 'there'}! Welcome back to SM Megamall. Looking for something specific today?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = inputText.toLowerCase();

      if (lowerInput.includes('parking')) {
        botResponse = "Directing you to the Real-Time Parking feature... You can find available slots in Building A and B right now!";
      } else if (lowerInput.includes('uniqlo')) {
        botResponse = "Uniqlo is located on the 3rd Floor, Zone B. It's about a 4-minute walk from the Atrium.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello! How can I assist you with your SM Mall experience today?";
      } else {
        botResponse = "That's a great question! Let me check that for you. Is there anything else I can help you find in the meantime?";
      }

      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };
  return (
    <div className="flex h-dvh flex-col bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Header */}
      <header className="flex flex-none items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#15202b] px-4 py-3 backdrop-blur-md">
        <Link
          to="/home"
          className="flex items-center justify-center rounded-full p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Icon name="arrow_back" />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="text-base font-bold tracking-tight">SM Assistant</h1>
          <div className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Online
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <ThemeToggle className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" />
          <button className="flex items-center justify-center rounded-full p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
            <Icon name="more_vert" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 space-y-6 overflow-y-auto scroll-smooth p-4 pb-24">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : ''} gap-3`}>
            {msg.type === 'bot' && (
              <div className="shrink-0 self-end">
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-400 to-primary p-px">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-800">
                    <Icon name="smart_toy" className="text-[16px] text-primary" />
                  </div>
                </div>
              </div>
            )}

            <div className={`flex max-w-[85%] flex-col ${msg.type === 'user' ? 'items-end' : ''} gap-2`}>
              <div className={`rounded-2xl ${
                msg.type === 'user'
                  ? 'rounded-br-sm bg-primary p-4 shadow-md shadow-primary/20'
                  : 'rounded-bl-sm border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-[#1e2a38] p-4 shadow-sm'
              }`}>
                <p className={`text-sm leading-relaxed ${
                  msg.type === 'user' ? 'font-medium text-white' : 'text-slate-700 dark:text-slate-200'
                }`}>
                  {msg.text}
                </p>

                {msg.text.includes('Uniqlo') && msg.type === 'bot' && (
                  <Link
                    to="/map"
                    className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 text-primary transition-colors hover:bg-primary/20 active:bg-primary/30"
                  >
                    <Icon name="map" className="text-[20px] transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold">Show on Map</span>
                  </Link>
                )}

                {msg.text.includes('Parking') && msg.type === 'bot' && (
                  <Link
                    to="/home"
                    className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 text-primary transition-colors hover:bg-primary/20 active:bg-primary/30"
                  >
                    <Icon name="local_parking" className="text-[20px] transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold">View Parking</span>
                  </Link>
                )}
              </div>
              <span className={`${msg.type === 'user' ? 'mr-1' : 'ml-1'} text-[11px] text-slate-500 dark:text-slate-400`}>
                {msg.time}
              </span>
            </div>

            {msg.type === 'user' && (
              <div className="shrink-0 self-end">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
                  <Icon name="person" className="text-[16px] text-slate-600 dark:text-slate-300" />
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-3 pl-11">
            <div className="flex space-x-1">
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 dark:bg-slate-400" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 dark:bg-slate-400 [animation-delay:0.1s]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 dark:bg-slate-400 [animation-delay:0.2s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="flex-none border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#15202b] p-4 pb-8 backdrop-blur-md">
        <form onSubmit={handleSend} className="relative mx-auto flex max-w-4xl items-center gap-2">
          <Link to="/home" className="shrink-0 rounded-full p-3 text-slate-500 dark:text-slate-400 transition-colors hover:bg-primary/10 hover:text-primary">
            <Icon name="add_circle" />
          </Link>
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
              className="w-full rounded-full border-0 bg-slate-100 dark:bg-[#1e2a38] py-3.5 pl-5 pr-12 text-slate-900 dark:text-slate-100 shadow-inner placeholder-slate-500 dark:placeholder-slate-400 transition-all focus:bg-slate-200 dark:focus:bg-[#253344] focus:ring-2 focus:ring-primary"
            />
            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-slate-500 dark:text-slate-400 transition-colors hover:text-primary">
              <Icon name="mic" className="text-[20px]" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-600 active:scale-95 active:bg-blue-700 disabled:opacity-50 disabled:active:scale-100"
          >
            <Icon name="send" />
          </button>
        </form>
      </footer>

    </div>
  );
}
