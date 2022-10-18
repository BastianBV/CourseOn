import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo"; 
import styles from '../Buttons/buttons.module.scss'
import CustomButton from '../Buttons/CustomButton'
import LoginApp from "../LoginWithApp/LoginApp";
const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
    <Link to='/loginApp'><CustomButton text='Inicia Sesión' className='buttonSesion'/> </Link>  
        <h4 className={`${styles.letterEdit}`}>Ingresa a través de </h4>
      <CustomButton text='Google' className='buttonGoogle'/>
      <h5 className={`${styles.count}`}>¿No tienes cuenta?</h5>
      <Link to='/register'>Regístrate</Link>
    </div>
  );
};

export default Login;
