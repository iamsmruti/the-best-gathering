import { GitHub } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const SmrutiButton = () => {
  return (
    <Button endIcon={<GitHub />} href={''} variant='contained' sx={{mr: 2, mb: 1}}>made by Smruti</Button>
  )
}

export default SmrutiButton