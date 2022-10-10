import React from 'react'
import styles from '../Inputs/inputs.module.scss'

const CustomInput = ({text, type}) => {
  return (
    <div className={`${styles.inputGroup}`}>
        <input
          required="required"
          type={type}
          name="text"
          autocomplete="off"
          className={`${styles.inputEf}`}
        />
        <label className={`${styles.userLabel}`}>{text}</label>
    </div>
  )
}

export default CustomInput