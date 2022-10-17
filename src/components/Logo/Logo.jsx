import React from 'react'
import styles from '../Logo/styles.module.scss'
const Logo = () => {
  return (
    <div className={`${styles.box}`}>
        <h2 className={`${styles.h2}`}> Course 
        </h2>
        <div className={`${styles.boxOn}`}>
        <h2 className={`${styles.on}`}>On</h2>
        </div>
    </div>
  )
}

export default Logo