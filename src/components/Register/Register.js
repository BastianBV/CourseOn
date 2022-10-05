import React from "react";
import Email from "../Inputs/Email";
import Name from "../Inputs/Name";
import Password from "../Inputs/Password";
import PasswordConfirm from "../Inputs/PasswordConfirm";
import Logo from "../Logo/Logo";
import styles from "../Register/register.module.scss";
const Register = () => {
  return (
    <>
      <Logo />
      <Name/>
      <Email/>
      <Password/>
      <PasswordConfirm/>
      <h5 className={`${styles.h5}`}>¿Ya tienes una cuenta?</h5>
      <h5 className={`${styles.h5}`}>Inicia Sesión</h5>
      <h6 className={`${styles.h6}`}>
      Al registrarse aceptas nuestros terminos de uso y politicas de privacidad.
      </h6>
      <h5 className={`${styles.h5}`}>COURSE-ON</h5>
    </>
  );
};

export default Register;
