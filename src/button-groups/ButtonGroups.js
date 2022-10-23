import React from 'react'
import { Stack } from '@mui/material'
import ShrutiButtonGroups1 from './shruti-lenka/shrutiButtonGroups1'
import ShrutiButtonGroups2 from './shruti-lenka/shrutiButtonGroups2'
import ShrutiButtonGroups3 from './shruti-lenka/shrutiButtonGroups3'


const ButtonGroups = () => {
    return (
      <Stack direction={'column'} sx={{flexWrap: 'wrap', p: 2}} justifyContent={'center'}>
      <ShrutiButtonGroups1/>
      <ShrutiButtonGroups2/>
      <ShrutiButtonGroups3/>
      </Stack>
    )
  }
  
  export default ButtonGroups 