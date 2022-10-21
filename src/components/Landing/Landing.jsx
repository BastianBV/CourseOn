import React from "react";
import styles from "../Landing/landing.module.scss";
import Cards from "./Cards/Cards";
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Grid from '@mui/material/Grid';
import CustomButton from "../Buttons/CustomButton";
const Landing = () => {

  return (
    <>
      <Logo/>
      <div className={`${styles.wrapper}`}>
    <Link to='/login'> <CustomButton text='¡Comienza Ahora!' className='buttonSesion'/> </Link>  
        {/* <span className={`${styles.typeWrap} ${styles.line}`}>Bienvenido a courseOn</span> */}
        {/* <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          'Bienvenido',
          1000,
          'Nosotros Somos',
          1000,
          'Course On',
          1000,
          'Encuentra',
          1000,
          'Aprende',
          1000,
          'Crea...',
          2000
        ]}/> */}
      </div>
      <Cards/>
    </>
  );
};
export default Landing;
