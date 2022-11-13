import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";
const PrincipalPage = () => {
  return (
    <>
      <Navbar />
      {/* <div> */}
      <Carrousel />
      <Carrousel />
      <Carrousel />

      {/* </div> */}
    </>
  );
};

export default PrincipalPage;
