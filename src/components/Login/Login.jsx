import React from "react";
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
import Logo from "../Logo/Logo"; 
import styles from '../Buttons/buttons.module.scss'
import CustomButton from '../Buttons/CustomButton'
const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
      <CustomButton text='Inicia Sesión' className='buttonSesion'/>
        <h4 className={`${styles.letterEdit}`}>Ingresa a través de </h4>
      <CustomButton text='Google' className='buttonGoogle'/>
      <CustomButton text='Github' className='buttonMicrosoft'/>
      <h5 className={`${styles.count}`}>¿No tienes cuenta?</h5>
      <Link to='/register'>Regístrate</Link>
    </div>
  );
};

export default Login;
