import React from 'react'
import { Stack } from '@mui/material'
import ShrutiBreadCrumbs1 from './shruti-lenka/shrutiBreadCrumbs1'

const BreadCrumbs = () => {
    return (
      <Stack direction={'row'} sx={{flexWrap: 'wrap', p: 2}} justifyContent={'center'}>
      <ShrutiBreadCrumbs1/>
      </Stack>
    )
  }
  
  export default BreadCrumbs