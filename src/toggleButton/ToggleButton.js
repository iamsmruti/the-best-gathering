import { Stack } from '@mui/system'
import React from 'react'
import SmrutiToggle from './smruti-ranjan/SmrutiToggle'
import CustomToggle from './vaishnav-sai/customToggle'

const ToggleButton = () => {
  return (
    <Stack sx={{p: 2}}>
      <SmrutiToggle />
    
    </Stack>
  )
}

export default ToggleButton