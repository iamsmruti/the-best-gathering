import { GitHub } from '@mui/icons-material'
import { Box, Grid, IconButton } from '@mui/material'
import { Stack, Typography } from '@mui/material'
import React from 'react'

import Card from './smruti-ranjan/SmrutiCard'
import Card2 from './vaishnav/Card2'

const Cards = () => {
  return (
    <Grid sx={{p: 2}} container>
        <Grid md={3} xs={12}>
            <Box sx={{width: 'fit-content', mr: 2, mb: 3}}>
                <Card />
                <Stack direction={'row'} sx={{pt: 1}} alignItems={'center'} justifyContent={'space-around'}>
                    <Typography variant="caption">Contributed By Smruti Ranjan</Typography>
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </Stack>
            </Box>
        </Grid>
        <Grid md={3} xs={12}>
            <Box sx={{width: 'fit-content', mr: 2, mb: 3}}>
                <Card2 />
                <Stack direction={'row'} sx={{pt: 1}} alignItems={'center'} justifyContent={'space-around'}>
                    <Typography variant="caption">Contributed By Sai Vaishnav</Typography>
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </Stack>
            </Box>
        </Grid>

        <Grid md={3} xs={12}>
            <Box sx={{width: 'fit-content', mr: 2, mb: 3}}>
                <Card />
                <Stack direction={'row'} sx={{pt: 1}} alignItems={'center'} justifyContent={'space-around'}>
                    <Typography variant="caption">Contributed By Gyana Ranjan Panda</Typography>
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </Stack>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Cards