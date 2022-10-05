import React from 'react'
import { Button } from "@mui/material";
import styles from '../Buttons/buttons.module.scss'

const Google = () => {
  return (
    <div className={`${styles.container}`}>
        <Button variant="outlined" className={`${styles.buttonGoogle}`}>Google</Button>
    </div>
  )
}

export default Google