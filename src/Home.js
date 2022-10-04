import GitHub from '@mui/icons-material/GitHub'
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import { Container, Stack } from '@mui/system'
import React from 'react'

import heroImage from './assets/heroImage.png'

const Home = () => {
  return (
    <Box sx={{}}>
        <Grid container sx={{flexWrap: 'wrap', height: {md: 'calc(100vh - 60px)', xs: 'auto'}}}>
            <Grid sx={{bgcolor: 'black', height: {md: '100%', xs: 300}, color: 'lightgray', display: 'flex', justifyContent: "center", alignItems: 'center'}} item md={6} xs={12}>
                <Stack>
                    <Typography variant='h2' sx={{fontWeight: 600, fontSize: '32px', mb: -2}}>The Best</Typography>
                    <Typography variant='h2' sx={{fontWeight: 600, fontSize: {md: '72px'}, color: purple[400]}}>Gathering</Typography>
                    <Typography sx={{color: 'darkgray', fontSize: '12px', ml: 8, mt: -2}}>UI components from all over the libraries</Typography>
                    <Button href='#explore' variant='outlined' sx={{color: purple[400]}}>Explore</Button>
                </Stack>
            </Grid>
            <Grid sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: {md: 0, xs: 3}}} item md={6} xs={12}>
                <img style={{width: '90%'}} src={heroImage}/>
            </Grid>
        </Grid>
        <div id='explore'></div>
        <Box sx={{height: {md: '100vh', xs: 'auto'}, bgcolor: 'lightgray', pt: 12}}>
            <Container>
                <Box>
                    <Typography variant='h2' sx={{fontWeight: 600, borderBottom: '6px solid #ab47bc', mb: 2}}>Our Goal</Typography>
                    <Typography sx={{fontSize: '24px', color: '#424242'}}>
                        People tend to be fixated to one UI library most of the times, because of which they tend to miss the most amazing components from other libraries. This website aims to provide you with the best components from all the libraries, so that you can use them in your projects.
                    </Typography>
                </Box>

                <Box sx={{display: {md: 'flex', xs: 'none'}, alignItems: 'center', justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                    <img style={{height: '140px'}} src="https://miro.medium.com/max/1400/1*Smbj_VLH7JRp9GhLaKyiUQ.png" />
                    <img style={{height: '60px', marginLeft: '2rem'}} src='https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true'/>
                    <img style={{height: '170px', marginLeft: '4rem'}} src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaec4339a8f3b14347736a_123_ant-design.259fccdbe1.png'/>
                </Box>
                <Box sx={{display: {md: 'none', xs: 'flex'}, alignItems: 'center', justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                    <img style={{height: '140px'}} src="https://miro.medium.com/max/1400/1*Smbj_VLH7JRp9GhLaKyiUQ.png" />
                    <img style={{height: '60px'}} src='https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true'/>
                    <img style={{height: '170px'}} src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaec4339a8f3b14347736a_123_ant-design.259fccdbe1.png'/>
                </Box>

                <Box>
                    <Typography sx={{fontSize: '24px', color: '#424242'}}>
                        You can contribute to this too with your own favourite UI library components.
                    </Typography>

                    <Typography sx={{fontSize: '24px', color: '#424242', mt: 2}}>
                        Visit our Repo for instructions on how to contribute.
                    </Typography>
                    <IconButton href="https://github.com/iamsmruti/the-best-gathering">
                        <GitHub sx={{fontSize: 'larger'}}/>
                    </IconButton>
                </Box>
            </Container>
        </Box>
        <Box sx={{bgcolor: 'black', color: 'lightgray', pt: 3, pb: 3}}>
            <Container>
                <Box>
                    <Typography align='center'>Made with 💜 by <a style={{textDecoration: 'none', color: purple[400]}} href='https://github.com/iamsmruti'>iamsmruti</a></Typography>
                </Box>
            </Container>
        </Box>
    </Box>
  )
}

export default Home