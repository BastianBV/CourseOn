import React from 'react'
import { Button } from "@mui/material";
import styles from '../Buttons/buttons.module.scss'

const CustomButton = ({text,className}) => {
  return (
    <div className={`${styles.container}`}>
          <Button variant="outlined" className={`${styles[className]}`}>{text}</Button>
    </div>
  )
}

export default CustomButton