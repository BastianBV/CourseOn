import { React, useState} from 'react'
import PhotoProfile from '../Dropzone/PhotoProfile';
import Avatar from "@mui/material/Avatar";
import CustomInput from '../Inputs/CustomInput'

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
    <Avatar src={ImageProfile} sx={{ width: 90, height: 90 }}/>
        <PhotoProfile  onChange={profileImage} />
        Datos Personales
        <CustomInput text='Name' type='text'/>
        <CustomInput text='Last Name' type='text'/>
        <CustomInput text='Location' type='text'/>
        <CustomInput text='Location' type='text'/>
    </>
  )
}

export default EditProfile