import React from 'react'
import { Stack } from '@mui/material'
import SmrutiButton from './smruti-ranjan/SmrutiButton'

const Buttons = () => {
  return (
    <Stack direction={'row'} sx={{flexWrap: 'wrap', p: 2}} justifyContent={'center'}>
        <SmrutiButton text={'Smruti Ranjan Badatya'} link={'https://github.com/iamsmruti'}/>
    </Stack>
  )
}

export default Buttons