import React from "react";
import Logo from "../Logo/Logo";
import styles from "../Login/login.module.scss"
import IniciarSesion from "../Buttons/IniciarSesion";
import Google from "../Buttons/Google";
import Github from "../Buttons/Github";

const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
      <IniciarSesion/>
        <h4 className={`${styles.letterEdit}`}>Ingresa a través de </h4>
      <Google/>
      <Github/>
      <h5 className={`${styles.count}`}>¿No tienes cuenta?</h5>
      <h5 className={`${styles.register}`}>Regístrate</h5>
    </div>
  );
};

export default Login;
