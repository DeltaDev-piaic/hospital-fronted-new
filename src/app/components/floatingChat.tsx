'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import img from "./../../../public/img/robot.jpg";
import img1 from "./../../../public/img/human.jpg";
import { ChatBubbleLeftIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

type ChatMessageType = {
  role: string;
  content: string;
};

export default function FloatingChat() {
  const [userInput, setUserInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null); // Reference for auto-scrolling

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleUserInput = async () => {
    if (userInput.trim() === '') return; // Prevent empty submissions

    setIsLoading(true);

    // Add the user input to the chat history
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ]);

    try {
      const response = await fetch('http://localhost:8000/chat', { // Update to your FastAPI endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Add the assistant's response to the chat history
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: 'assistant', content: data.answer },
      ]);
    } catch (error) {
      console.error("Error generating content:", error);
    }

    setUserInput(''); // Clear the input field
    setIsLoading(false); // Stop loading
  };

  // Automatically scroll to the latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <div
        className={`${
          isOpen ? 'hidden' : 'block'
        } bg-gradient-to-r from-[#d17090] to-[#be3a7c] text-white p-4 rounded-full cursor-pointer shadow-lg transition duration-300 ease-in-out transform hover:scale-110`}
        onClick={toggleChat}
      >
        <ChatBubbleLeftIcon className="w-8 h-8" />
      </div>

      {/* Chat Window */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } bg-white rounded-2xl shadow-2xl w-[450px] h-[650px] flex flex-col p-6 transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#d677a7] via-[#e56ea8] to-[#e6529c] text-white p-4 rounded-t-2xl fixed top-0 left-0 right-0 z-10">
          <h2 className="text-xl font-semibold">Doctor AI Assistant</h2>
          <button
            className="text-white hover:text-gray-300 transition ease-in-out"
            onClick={toggleChat}
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>

        {/* Messages */}
        <div className='mb-6 pt-12 overflow-y-auto flex-grow' style={{ maxHeight: "500px" }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`flex items-start mb-3 text-lg ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {/* Image for User or Assistant */}
              <div className="flex-shrink-0">
                {message.role === 'user' ? (
                  <Image
                    src={img1} // User Image
                    alt="User"
                    className="h-10 w-10 rounded-full mx-2"
                  />
                ) : (
                  <Image
                    src={img} // Assistant Image
                    alt="Assistant"
                    className="h-10 w-10 rounded-full mx-2"
                  />
                )}
              </div>

              {/* Message Content */}
              <div
                className={`inline-block p-4 rounded-md max-w-[75%] transition duration-300 ease-in-out transform hover:scale-105 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-[#df84a3] to-[#d44988] text-white font-semibold shadow-md hover:from-[#cc4689] hover:to-[#cc4689] hover:text-white'
                    : 'bg-gradient-to-r from-purple-200 to-purple-300 text-gray-800 shadow-md hover:from-[#c8c1c4] hover:to-[#9f989c]'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} /> {/* Element for auto-scrolling */}
        </div>

        {/* Input Area of Chatbot */}
        <div className='flex p-4'>
          <input
            type='text'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserInput();
              }
            }}
            className='flex-1 w-full px-4 py-3 text-gray-700 border border-gray-300 bg-white rounded-l-lg text-lg'
            placeholder='Ask me anything...'
          />
          {isLoading ? (
            <div className='bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-sm shadow-l-2xl animate-pulse'>
              Loading...
            </div>
          ) : (
            <button
              disabled={isLoading}
              onClick={handleUserInput}
              className={`px-6 py-3 font-sans ${isLoading ? 'opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-[#e653a6] to-[#f0d7e8] hover:from-purple-600 hover:to-purple-800 text-white border-transparent rounded-r-lg'}`}
            >
              <PaperAirplaneIcon className="w-6 h-6 transform rotate-45" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
