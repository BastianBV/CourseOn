import React from "react";
import Logo from "../Logo/Logo";
import styles from "../LoginWithApp/loginApp.module.scss";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Inputs/CustomInput";

const LoginApp = () => {
  return (
    <>
      <Logo />
      <div className={`${styles.container}`}>
       <CustomInput text='Correo'/>
       <CustomInput text='Contraseña'/>
       <CustomButton text='Inicia Sesión' className='buttonSesion'/>
      </div>
    </>
  );
};

export default LoginApp;
