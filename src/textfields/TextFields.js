import { Stack } from '@mui/system'
import React from 'react'
import GyanaCustomFields from './gyana-ranjan/GyanaCustomFields'
import SmrutiTextField from './smruti-ranjan/SmrutiTextField'
import VTextfield from './vaishnav/VTextfield'

const TextFields = () => {
  return (
    <Stack direction={'row'} sx={{ p: 2, justifyContent: 'center' }}>
      <SmrutiTextField />
      <GyanaCustomFields  label='made by meditating panda' color='error' />
      <VTextfield />
    </Stack>
  )
}

export default TextFields