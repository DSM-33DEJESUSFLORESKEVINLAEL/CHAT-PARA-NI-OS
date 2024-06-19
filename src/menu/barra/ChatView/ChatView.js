import React from 'react';

const ChatView = () => {
  return (
    <div className="chat-view">
      <h1>CHAT</h1>
      <div className="chat-box">
        {/* Contenido de la vista de chat */}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Envia un mensaje a tu ChatGPT" />
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default ChatView;
