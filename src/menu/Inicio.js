import React, { useState } from 'react';
import './Inicio.css'; // Asegúrate de importar el archivo CSS

const App = () => {
  const [activeView, setActiveView] = useState('chat');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          {/* Agrega tu logo aquí */}
          <img src="logo.png" alt="Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li className={`navbar-item ${activeView === 'inicio' ? 'active' : ''}`}>
              <button onClick={() => handleViewChange('inicio')}>Inicio</button>
            </li>
            <li className={`navbar-item ${activeView === 'chatgpt' ? 'active' : ''}`}>
              <button onClick={() => handleViewChange('chatgpt')}>ChatGPT</button>
            </li>
            <li className={`navbar-item ${activeView === 'cuenta' ? 'active' : ''}`}>
              <button onClick={() => handleViewChange('cuenta')}>Mi Cuenta</button>
            </li>
            <li className={`navbar-item ${activeView === 'ayuda' ? 'active' : ''}`}>
              <button onClick={() => handleViewChange('ayuda')}>Como se utiliza</button>
            </li>
          </ul>
        </nav>
        <div className="user-info">
          <i className="user-icon">👤</i>
          <span>Mi Cuenta</span>
          {/* <div className="cart">
            <i>🛒</i>
            <span>2</span>
          </div> */}
        </div>
      </div>

      <div className="main">
        <div className="content">
          {activeView === 'chat' && (
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
          )}
          {activeView === 'inicio' && (
            <div className="inicio-view">
              <h1>Inicio</h1>
              {/* Contenido de la vista de inicio */}
            </div>
          )}
          {activeView === 'chatgpt' && (
            <div className="chatgpt-view">
              <h1>ChatGPT</h1>
              {/* Contenido de la vista de ChatGPT */}
            </div>
          )}
          {activeView === 'cuenta' && (
            <div className="cuenta-view">
              <h1>Mi Cuenta</h1>
              {/* Contenido de la vista de mi cuenta */}
            </div>
          )}
          {activeView === 'ayuda' && (
            <div className="ayuda-view">
              <h1>Como se utiliza</h1>
              {/* Contenido de la vista de ayuda */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
