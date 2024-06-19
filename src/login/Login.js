import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
// import sequelize from '../config/database'; // Importa la configuración de Sequelize

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Simulación de inicio de sesión exitoso
    console.log('Login successful!');
    navigate('/Inicio');
    
    // Aquí deberías realizar una consulta a la base de datos para verificar las credenciales
    // Por ejemplo:
    // sequelize.query("SELECT * FROM users WHERE email = :email AND password = :password", {
    //   replacements: { email, password },
    //   type: sequelize.QueryTypes.SELECT
    // })
    // .then((users) => {
    //   if (users.length > 0) {
    //     // Successful login
    //     console.log('Login successful!');
    //     navigate('/Inicio');
    //   } else {
    //     setErrorMessage('Correo electrónico o contraseña no válidos');
    //   }
    // })
    // .catch((error) => {
    //   console.error('Error al realizar la consulta:', error);
    //   setErrorMessage('Error al realizar la consulta');
    // });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="/assets/images/login/HAPPYGPT.jpg" alt="Login Illustration"/>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
            </label>
            <br />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="register-link">
            ¿Aún no tienes una cuenta? <Link to="/Registro">Regístrate aquí</Link>
          </p>
          <p className="forgot-password-link">
            ¿Olvidaste tu contraseña? <Link to="/ForgotPassword">Restablecer aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
