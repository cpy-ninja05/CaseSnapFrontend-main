import React, { useState } from 'react';
import axios from 'axios';
import '../styles/chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [fileLink, setFileLink] = useState('');

  const handleSend = async () => {
    if (!message.trim()) return; // Prevent sending empty messages
    try {
      const response = await axios.post('http://localhost:5000/chat', { message });
      if (response.data.response) {
        setResponses([...responses, { user: message, bot: response.data.response }]);
        setMessage('');
      }
      if (response.data.fileUrl) {
        setFileLink(response.data.fileUrl);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of Enter key
      handleSend();
    }
  };

  return (
    <div className="mainchat">
      <div className="leftbar">
        <a href="/"><i className="fa-solid fa-house"></i></a>
        <div className="welcome-text">
          Welcome to CaseSnap AI, your smart legal assistant! I'm here to
          help simplify your legal journey by gathering key details and
          organizing your case information in a clear and concise way. Together,
          we can streamline the legal process, saving you time and making sure
          your concerns are accurately conveyed to your legal team.
        </div>
      </div>
      <div className="chat-form">
        <div className="chat-box">
          {responses.map((res, index) => (
            <div key={index} className="chat-message">
              <div className="user-message">{res.user}</div>
              <div className="bot-message">{res.bot}</div>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Add onKeyPress event handler
            placeholder="Type your message..."
            required
          />
          <button type="submit">Send</button>
        </form>
        {fileLink && <a href={fileLink} download="chat_log.pdf">Download Chat Log</a>}
      </div>
    </div>
  );
};

export default Chat;
