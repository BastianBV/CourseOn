import React from 'react'
import { Button } from "@mui/material";
import styles from '../Buttons/buttons.module.scss'

const IniciarSesion = () => {
  return (
    <div className={`${styles.container}`}>
      <Button variant="outlined" className={`${styles.buttonSesion}`}>Iniciar sesión</Button>
    </div>
  )
}

export default IniciarSesion