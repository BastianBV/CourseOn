import React from 'react'
import styles from '../Inputs/inputs.module.scss'
const Password = () => {
  return (
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
  )
}

export default Password