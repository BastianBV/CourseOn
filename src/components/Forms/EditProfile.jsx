import { React, useState } from "react";
import PhotoProfile from "../Dropzone/PhotoProfile";
import Avatar from "@mui/material/Avatar";
<<<<<<< HEAD
import CustomInput from '../Inputs/CustomInput'
import { Box } from "@mui/system";
import { Paper } from '@mui/material';
import CustomButton from "../Buttons/CustomButton";

=======
import CustomInput from "../Inputs/CustomInput";
import { Outlet } from "react-router-dom";
>>>>>>> adf02ae38a64d6ae338c47e2af04cd0a7764cf0e

const EditProfile = () => {
  const [ImageProfile, setImageProfile] = useState(null);
  const profileImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageProfile(e.target.result);
    };
  };
  return (
    <>
<<<<<<< HEAD
    <Box sx={{mt:10,display:'flex', flexDirection:'column', alignItems:'center'}}>
    <Avatar src={ImageProfile} sx={{ width: 90, height: 90 }}/>
        <PhotoProfile  onChange={profileImage} />
        Datos Personales
        <Paper  elevation={6}
            sx={{
              background: "#282c34",
              height: 350,
              mt: 3,
              p: 5,
              opacity: 0.5,
              width: 317,
              "@media (max-width:768px)": { width: 222, height: 300 },
            }}>
        <CustomInput text='Name' type='text'/>
        <CustomInput text='Last Name' type='text'/>
        <CustomInput text='Location' type='text'/>
        <CustomInput text='Description' type='text' style={{height:100}}/>
        <CustomButton text='Guardar cambios' type='submit' className='buttonGoogle'/>
        </Paper>
    </Box>
=======
      <Avatar src={ImageProfile} sx={{ width: 90, height: 90 }} />
      <PhotoProfile onChange={profileImage} />
      Datos Personales
      <CustomInput text="Name" type="text" />
      <CustomInput text="Last Name" type="text" />
      <CustomInput text="Location" type="text" />
      <CustomInput text="Location" type="text" />
      <Outlet />
>>>>>>> adf02ae38a64d6ae338c47e2af04cd0a7764cf0e
    </>
  );
};

export default EditProfile;
