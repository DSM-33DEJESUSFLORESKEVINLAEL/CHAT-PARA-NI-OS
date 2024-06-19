import React, { useState } from 'react';
import './Registro.css';
import { Link } from 'react-router-dom';


function Registro() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', {
      name,
      surname,
      city,
      phone,
      email,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-title">REGÍSTRATE</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Apellidos</label>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="input-field"
                  required
                />
                <label htmlFor="terms" className="input-label">
                  He leído y acepto los Términos y Condiciones
                </label>
              </div>
            </div>
            <button type="submit" className="login-button" disabled={!termsAccepted}>
              REGISTRARME
            </button>
          </form>
          <div className="form-footer">
            <p className="register-link">
              ¿Ya tienes una cuenta? <Link to="/">Inicio</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
