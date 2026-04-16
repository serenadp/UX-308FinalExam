export default function MessageBubble({ direction, text }) {
  const isUser = direction === "outgoing";

  // USER (right side)
  if (isUser) {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={styles.user}>
          {text}
        </div>
      </div>
    );
  }

  // AI (left side, plain text)
  return (
    <div style={styles.botWrapper}>
      <div style={styles.botText}>{text}</div>
    </div>
  );
}

const styles = {
  user: {
    background: "#e8eaed",
    padding: "10px 16px",
    borderRadius: "18px",
    fontSize: "14px",
    maxWidth: "200px"
  },

  botWrapper: {
    textAlign: "left",
    marginBottom: "20px"
  },

  botText: {
    fontSize: "16px",
    color: "#202124",
    lineHeight: "1.6",
    maxWidth: "700px"
  }
};