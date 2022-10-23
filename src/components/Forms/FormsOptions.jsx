import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import CustomInput from '../Inputs/CustomInput'

const Forms = () => {
  return (
    <>
      <Typography>Prueba / Evaluavion</Typography>
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', width:700}}>
        <Typography>Opcion multiple</Typography>
        <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center', p:5, width:600, mb:4, bgcolor:'#282c3491'}}>
          <Typography>Pregunta</Typography>
          <CustomInput text='Pregunta para el usuario' type='text'/>
          <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center',mb:5, width:400, p:2, bgcolor:'#27272769'}}>
          <Typography>Opcion 1</Typography>
         
          <CustomInput text='Introduce la opcion' type='text'/>
          <CustomInput text='Valor' type='text'/>
          </Paper>
          <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center',mb:5, width:400, p:2, bgcolor:'#27272769'}}>
          <Typography>Opcion 2</Typography>
          
          <CustomInput text='Introduce la opcion' type='text'/>
          <CustomInput text='Valor' type='text'/>
          </Paper>
          <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center',mb:5, width:400, p:2, bgcolor:'#27272769'}}>
          <Typography>Opcion 3</Typography>
          
          <CustomInput text='Introduce la opcion' type='text'/>
          <CustomInput text='Valor' type='text'/>
          </Paper>
        </Paper>
      </Box>
    </>
  );
};

export default Forms;
