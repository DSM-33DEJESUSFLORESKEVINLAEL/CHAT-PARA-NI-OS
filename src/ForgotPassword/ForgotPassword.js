import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; 
import { useStyles } from '../App'; 

function ForgotPassword() {
  const classes = useStyles(); // Usa useStyles aquí para obtener las clases
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para restablecer contraseña aquí
  };

  return (
    <div className={`${classes.forgotPassword} login-page`}>
      <div className="login-container">
        <div className="login-image">
          <img src="/assets/images/login/HAPPYGPT.jpg" alt="Login Illustration" />
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Restablecer contraseña</h2>
          <form className={classes.form} onSubmit={handleSubmit}>
            <label>
              Correo electrónico:
              <input
                className={`${classes.input} input-field`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <button className={`${classes.button} login-button`} type="submit">Restablecer contraseña</button>
          </form>
          <Link to="/" className="register-link">Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
