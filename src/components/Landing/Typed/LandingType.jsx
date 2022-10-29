import React from "react";
import styles from "../landing.module.scss";
const LandingType = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <span className={`${styles.typeWrap} ${styles.line}`}>
          Bienvenido a courseOn
        </span>
      </div>
    </>
  );
};
export default LandingType;
