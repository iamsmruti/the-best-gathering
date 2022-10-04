import { GitHub } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const SaiButton = ({text, link}) => {
  return (
    <Button  endIcon={<GitHub />} href={link} variant='contained' sx={{mr: 2, mb: 1, bgcolor: 'purple'}}>{text}</Button>
  )
}

export default SaiButton