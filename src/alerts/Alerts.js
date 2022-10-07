import React from 'react'
import { Stack } from '@mui/material'
import ShrutiAlerts1 from './shruti-lenka/shrutiAlerts1'
import ShrutiAlerts2 from './shruti-lenka/shrutiAlerts2'
import ShrutiAlerts3 from './shruti-lenka/shrutiAlerts3'
import ShrutiAlerts4 from './shruti-lenka/shrutiAlerts4'
import ShrutiAlerts5 from './shruti-lenka/shrutiAlerts5'

const Alerts = () => {
    return (
      <Stack direction={'column'} sx={{flexWrap: 'wrap', p: 2}} justifyContent={'center'}>
      <ShrutiAlerts1/>
      <ShrutiAlerts2/>
      <ShrutiAlerts3/>
      <ShrutiAlerts4/>
      <ShrutiAlerts5/>
  
      </Stack>
    )
  }
  
  export default Alerts