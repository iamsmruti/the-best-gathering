import React from 'react'
import { Stack } from '@mui/material'
import SmrutiButton from './smruti-ranjan/SmrutiButton'
import SaiButton from './sai-kiran/SaiButton'
import Custombtn from './gyana-ranjan/Custombtn'
import VButton from './sai-vaishnav/VButton'
import ShrutiButton1 from './shruti-lenka/shrutiButton1'
import ShrutiButton2 from './shruti-lenka/shrutiButton2'
import ShrutiButton3 from './shruti-lenka/shrutiButton3'
import ShrutiButton4 from './shruti-lenka/shrutiButton4'
import ShrutiButton5 from './shruti-lenka/shrutiButton5'
import ShrutiButton6 from './shruti-lenka/shrutiButton6'
import ShrutiButton7 from './shruti-lenka/shrutiButton7'
import ShrutiButton8 from './shruti-lenka/shrutiButton8'
import ShrutiButton9 from './shruti-lenka/shrutiButton9'
import ShrutiButton10 from './shruti-lenka/shrutiButton10'


const Buttons = () => {
  return (
    <Stack direction={'row'} sx={{ flexWrap: 'wrap', p: 2 }} justifyContent={'center'}>
      <SmrutiButton text={'Smruti Ranjan Badatya'} link={'https://github.com/iamsmruti'} />
      <SaiButton text={'Sai Kiran Mansingh'} link={'https://github.com/skms625'} />
      <Custombtn text='Meditating Panda' link='https://github.com/Meditatingpanda' />
      <VButton text="Sai Vaishnav" link="https://github.com/SaiVaishnav" />
      <ShrutiButton1/>
      <ShrutiButton2/>
      <ShrutiButton3/>
      <ShrutiButton4/>
      <ShrutiButton5/>
      <ShrutiButton6/>
      <ShrutiButton7/>
      <ShrutiButton8/>
      <ShrutiButton9/>
      <ShrutiButton10/>

    </Stack>
  )
}

export default Buttons