import React from "react";
import styles from "../Landing/landing.module.scss";
import Cards from "./Cards/Cards";
const Landing = () => {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <span className={`${styles.typeWrap} ${styles.line}`}>Bienvenido a courseOn</span>
      </div>
      <Cards/>
    </>
  );
};
export default Landing;
