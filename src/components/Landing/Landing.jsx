import React from "react";
import styles from "../Landing/landing.module.scss";
import Cards from "./Cards/Cards";
import { Link } from "react-router-dom";
import LandingType from "./Typed/LandingType";
import Logo from "../Logo/Logo";
import Grid from "@mui/material/Grid";
import CustomButton from "../Buttons/CustomButton";
const Landing = () => {
  return (
    <>
      <Logo />
      <div className={`${styles.wrapper}`}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <CustomButton text="¡Comienza Ahora!" className="buttonSesion" />{" "}
        </Link>
        <LandingType />
      </div>
      <Cards />
    </>
  );
};
export default Landing;
