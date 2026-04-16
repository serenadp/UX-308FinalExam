import React, { useState, useRef } from "react";
import { handleInput } from "../Order";
import ChatView from "./ChatView";

export default function AIView() {
  const [messages, setMessages] = useState([]);
  const [inputBarText, setInputBarText] = useState("");
  const scrollViewRef = useRef(null);

  const scrollToBottom = () => {};

  const sendMessage = (text) => {
    if (!text) return;

    const responses = handleInput(text);

    // user message
    setMessages((prev) => [
      ...prev,
      { direction: "outgoing", text }
    ]);

    // bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        ...responses.map((r) => ({
          direction: "incoming",
          text: r
        }))
      ]);
    }, 500);

    setInputBarText("");
  };

  return (
    <ChatView
      scrollToBottom={scrollToBottom}
      scrollViewRef={scrollViewRef}
      sendMessage={sendMessage}
      styles={{}}
      messages={messages}
      setInputBarText={setInputBarText}
      inputBarText={inputBarText}
    />
  );
}