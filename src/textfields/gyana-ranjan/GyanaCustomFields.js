import { TextField } from '@mui/material'
import React from 'react'
//checking hacktoberfest accepting or not
const GyanaCustomFields = (props) => {
  return (
    <TextField {...props} sx={{maxWidth: '280px'}}/>
  )
}

export default GyanaCustomFields