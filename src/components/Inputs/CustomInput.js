import React from 'react'
import styles from '../Inputs/inputs.module.scss'

const CustomInput = ({text}) => {
  return (
    <div className={`${styles.inputGroup}`}>
        <input
          required="required"
          type="text"
          name="text"
          autocomplete="off"
          className={`${styles.inputEf}`}
        />
        <label className={`${styles.userLabel}`}>{text}</label>
    </div>
  )
}

export default CustomInput