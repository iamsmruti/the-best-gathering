import React from 'react'
import { Stack } from '@mui/material'
import SmrutiButton from './smruti-ranjan/SmrutiButton'
import SaiButton from './sai-kiran/SaiButton'

const Buttons = () => {
  return (
    <Stack direction={'row'} sx={{flexWrap: 'wrap', p: 2}} justifyContent={'center'}>
        <SmrutiButton text={'Smruti Ranjan Badatya'} link={'https://github.com/iamsmruti'}/>
        <SaiButton text={'Sai Kiran Mansingh'} link={'https://github.com/skms625'}/>
    </Stack>
  )
}

export default Buttons