import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './login/Login';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Registro from './registro/Registro';
import Inicio from './menu/Inicio';
 
const useStyles = makeStyles((theme) => ({
  forgotPassword: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export { useStyles }; // Exporta useStyles

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Inicio" element={<Inicio/>} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/Registro" element={<Registro />} />
       

      </Routes>
    </Router>
  );
}

export default App;
