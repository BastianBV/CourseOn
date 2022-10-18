import React from 'react'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
const ConfigProfile = () => {
  return (
    <>
    <Link to='/settings'>
    <IconButton sx={{position:'fixed', right:0,top: 0}} >
    <SettingsIcon/>
    </IconButton>
    </Link>
  
    </>
  )
}

export default ConfigProfile