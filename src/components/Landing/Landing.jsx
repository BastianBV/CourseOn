import React from "react";
import styles from "../Landing/landing.module.scss";
import Cards from "./Cards/Cards";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Grid from "@mui/material/Grid";
import CustomButton from "../Buttons/CustomButton";
const Landing = () => {
  return (
    <>
      <Logo style={{ marginTop: 50 }} />
      <div className={`${styles.wrapper}`}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <CustomButton
            text="¡Comienza Ahora!"
            className="buttonGoogle"
            styled={{ width: 200 }}
          />{" "}
        </Link>
      </div>
      <Cards />
    </>
  );
};
export default Landing;
