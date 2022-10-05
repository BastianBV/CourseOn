import React from 'react'
import { Button } from "@mui/material";
import styles from '../Buttons/buttons.module.scss'
const Github = () => {
  return (
    <div className={`${styles.container}`}>
      <Button variant="outlined" className={`${styles.buttonMicrosoft}`}>Github</Button>
    </div>
  )
}

export default Github