import { Stack } from '@mui/system'
import React from 'react'
import SmrutiToggle from './smruti-ranjan/SmrutiToggle'
import CustomToggle from './vaishnav-sai/CustomToggle'

const ToggleButton = () => {
  return (
    <Stack sx={{p: 2}}>
      <SmrutiToggle />
      <CustomToggle />
      <CustomToggle />
      <CustomToggle />
    </Stack>
  )
}

export default ToggleButton