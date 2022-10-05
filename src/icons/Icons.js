import { Box, Divider, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import { Stack } from '@mui/system'
import React from 'react'
import MaterialUI from './MaterialUI'

const Icons = () => {
  return (
    <Stack sx={{p: 2}}>
        <Typography variant='h5' sx={{fontWeight: 600, color: purple[400]}}>MUI Icons</Typography>
        <Divider />
        <MaterialUI />
    </Stack>
  )
}

export default Icons