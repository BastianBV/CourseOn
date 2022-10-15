import React from 'react'
import styles from '../Carrousel/carrousel.module.scss'
const Carrousel = () => {
  return (
    <div className={`${styles.conteiner}`}>
    <div className={`${styles.carrousel}`}>
        <article className={`${styles.card}`}>
            <h1>Java</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>Python</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>React Js</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>HTML</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>Css</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>SQL</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>NoSQL</h1>
        </article>
    </div>
    </div>
  )
}

export default Carrousel