import { React, useState} from 'react'
import PhotoProfile from '../Dropzone/PhotoProfile';
import Avatar from "@mui/material/Avatar";
import CustomInput from '../Inputs/CustomInput'
import { Box } from "@mui/system";
import { Paper } from '@mui/material';
import CustomButton from "../Buttons/CustomButton";


const EditProfile = () => {
  const [ImageProfile, setImageProfile] = useState(null);
  const profileImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageProfile(e.target.result);
    };
  }
  return (
    <>
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
    </>
  )
}

export default EditProfile