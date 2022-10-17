import React from 'react'
import styles from '../Inputs/inputs.module.scss'

const CustomInput = ({text, type, onChange, name}) => {
  return (
    <div className={`${styles.inputGroup}`}>
        <input
          onChange={onChange}
          required="required"
          type={type}
          name={name}
          autoComplete="off"
          className={`${styles.inputEf}`}
        />
        <label className={`${styles.userLabel}`}>{text}</label>
    </div>
  )
}

export default CustomInput