import React from 'react'
import Logo from '../Logo/Logo'
import styles from '../LoginWithApp/loginApp.module.scss'
import IniciarSesion from "../Buttons/IniciarSesion";

const LoginApp = () => {
  return (
    <div>
        <Logo/>
        <div className={`${styles.inputGroup}`}>
        <input
          required="required"
          type="text"
          name="text"
          autocomplete="off"
          className={`${styles.inputEf}`}
        />
        <label className={`${styles.userLabel}`}>E-mail</label>
      </div>
      <div className={`${styles.inputGroup}`}>
        <input
          required="required"
          type="text"
          name="text"
          autocomplete="off"
          className={`${styles.inputEf}`}
        />
        <label className={`${styles.userLabel}`}>Contraseña</label>
      </div>
      <IniciarSesion/>
    </div>
  )
}

export default LoginApp