import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import CustomInput from "../Inputs/CustomInput";
const FormsOneOption = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 700,
          mt:5
        }}
      >
        <Typography>Elije una Opcion</Typography>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 5,
            width: 600,
            mb: 4,
            bgcolor: "#282c3491",
          }}
        >
          <Typography>Pregunta</Typography>
          <CustomInput  type="text" placeholder='Pregunta para el usuario'/>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 5,
              width: 400,
              p: 2,
              bgcolor: "#27272769",
            }}
          >
            <Typography>Opcion 1 (Correcta)</Typography>

            <CustomInput text="Introduce la opcion" type="text" />
            <CustomInput text="Feedback: El alumno recibirá este mensaje cuando se elija la opcion" type="text" style={{height:300}}/>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 5,
              width: 400,
              p: 2,
              bgcolor: "#27272769",
            }}
          >
            <Typography>Opcion 2 (Incorrecta)</Typography>

            <CustomInput text="Introduce la opcion" type="text" />
            <CustomInput text="Feedback: El alumno recibirá este mensaje cuando se elija la opcion" type="text"  style={{height:300}}/>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 5,
              width: 400,
              p: 2,
              bgcolor: "#27272769",
            }}
          >
            <Typography>Opcion 3 (Incorrecta)</Typography>

            <CustomInput text="Introduce la opcion" type="text" />
            <CustomInput text="Feedback: El alumno recibirá este mensaje cuando se elija la opcion" type="text"  style={{height:300}}/>
          </Paper>
        </Paper>
      </Box>
    </>
  );
};

export default FormsOneOption;
