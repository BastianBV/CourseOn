import React from 'react'
// import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import banner from '../../assets/images/banner.jpg'
const CreateCourse = () => {
  return (
    <>
    <Avatar src={banner} sx={{minWidth: 320, minHeight: 149, borderRadius: 10, '@media (min-width: 768px)':{width:759, height:250, top:0}}} />
    </>
  )
}

export default CreateCourse