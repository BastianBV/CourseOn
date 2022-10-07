import React from "react";
import CustomInput from "../Inputs/CustomInput";
import Logo from "../Logo/Logo";
import styles from "../Register/register.module.scss";
const Register = () => {
  return (
    <>
      <Logo />
      <CustomInput text='Nombre'/>
      <CustomInput text='Correo'/>
      <CustomInput text='Contraseña'/>
      <CustomInput text='Confirmar Contraseña'/>
      <h5 className={`${styles.h5}`}>¿Ya tienes una cuenta?</h5>
      <h5 className={`${styles.h5}`}>Inicia Sesión</h5>
      <h6 className={`${styles.h6}`}>
      Al registrarse aceptas nuestros terminos de uso y politicas de privacidad.
      </h6>
      <h5 className={`${styles.h5}`}>COURSE-ON.</h5>
    </>
  );
};

export default Register;
