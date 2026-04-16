import React from "react";
import MessageBubble from "./MessageBubble";
import nailsImg from "../Assets/nails.jpg";

export default function ChatView({
  sendMessage,
  messages,
  setInputBarText,
  inputBarText
}) {

  const handleSend = (text) => {
    if (!text) return;
    sendMessage(text);
  };

  return (
    <div style={aiStyles.page}>

      {/* TOP IMAGE */}
      <img src={nailsImg} style={aiStyles.banner} alt="nails" />

      {/* Title */}
      <h1 style={aiStyles.title}>
        Hi Serena, what's on your mind?
      </h1>

      {/* Input */}
      <div style={aiStyles.inputWrapper}>
        <span style={aiStyles.plus}>+</span>

        <input
          style={aiStyles.input}
          placeholder="Ask anything"
          value={inputBarText}
          onChange={(e) => setInputBarText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend(inputBarText);
          }}
        />

        <span style={aiStyles.mic}>🎤</span>
      </div>

      {/* Suggestions */}
      {messages.length === 0 && (
        <div style={aiStyles.suggestions}>
          <div onClick={() => handleSend("manicure")}>
            ✨ Manicure
          </div>
          <div onClick={() => handleSend("pedicure")}>
            ✨ Pedicure
          </div>
          <div onClick={() => handleSend("recommend")}>
            ✨ What do you recommend?
          </div>
        </div>
      )}

      {/* Messages */}
      <div style={aiStyles.messages}>
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            direction={msg.direction}
            text={msg.text}
          />
        ))}
      </div>

    </div>
  );
}

const aiStyles = {
  page: {
    background: "#f8f9fa",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "Arial"
  },

  banner: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "0 0 20px 20px",
    marginBottom: "20px"
  },

  title: {
    fontSize: "36px",
    fontWeight: "500",
    marginBottom: "30px"
  },

  inputWrapper: {
    width: "650px",
    margin: "0 auto",
    background: "#e8eaed",
    borderRadius: "30px",
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  input: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "18px"
  },

  plus: {
    fontSize: "22px",
    cursor: "pointer"
  },

  mic: {
    fontSize: "18px",
    cursor: "pointer"
  },

  suggestions: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center"
  },

  messages: {
    marginTop: "30px",
    width: "650px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};