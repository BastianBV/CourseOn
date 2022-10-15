import { Grid } from '@mui/material'
import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import Navbar from '../Navbar/Navbar'

const PrincipalPage = () => {
  return (
    <>
    <Navbar/>
    <Grid>
    <Carrousel/>
    <Carrousel/>
    <Carrousel/>
    <Carrousel/>
    </Grid>
    </>
  )
}

export default PrincipalPage