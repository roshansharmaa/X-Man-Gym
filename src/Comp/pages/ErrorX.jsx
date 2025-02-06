import { Box } from '@mui/material'
import React from 'react'
import err from '../../images/err.png'

function ErrorX() {
  return (
   <Box sx={{fontSize:'2rem', backgroundImage:`${err}`,display:'flex',justifyContent:'center' , margin:'2rem 0'}} >
    <Box
      component="img"
      src={err}
      alt="Example Image"
      sx={{ height: {sm:150,md:600,xs:200}, borderRadius: "8px" }}
    />
   </Box>
  )
}

export default ErrorX