import { Avatar, Box, Button, Container, Grid, LinearProgress, Stack, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import developerImg from '../Componenets/Avatar.png'
import '../index.css'
import SocialLinks from '../Utility/SocialLinks';
import HelmetMeta from '../Componenets/Custom Meta/HelmetMeta';
const DevAboutMe = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    const [progress4, setProgress4] = useState(0);
    const [progress5, setProgress5] = useState(0);
    const [progress6, setProgress6] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress1(92);
            setProgress2(85)
            setProgress3(90)
            setProgress4(80)
            setProgress5(55)
            setProgress6(70)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            {
                window.location.pathname === '/aboutme' && <HelmetMeta description={"I’m a Abdul jabbar, I have a serious passion for creating intuitive, dynamic user experiences. Interested in the entire frontend spectrum and working on ambitious projects with positive people. I'm experienced in developing websites which are fully responsive to all kind of devices. I have the ability to write semantic, cross-browser compatible, clean code by hand that is re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, JavaScript (with React)."} pageName='Abdul Jabbar -Bio'></HelmetMeta>

            }
            <Box mt={{ xs: '20%', sm: '10%', md: '8%' }} display={'flex'} justifyContent={'center'}>
                <Avatar
                    alt="Abdul jabbar avatar"
                    src={developerImg}
                    sx={{ width: 250, height: 250, }}
                />
            </Box>
            <Container sx={{ my: 5 }}>
                <Grid container sx={{ bgcolor: '#302F4E', borderRadius: 3 }}>

                    <Grid item p={3} >
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                            <Typography fontWeight={'bold'} variant='h4' sx={{ textTransform: 'uppercase', letterSpacing: '4px' }} >Abdul jabbar</Typography>
                            <Stack mx={'auto'} direction="row" spacing={1}>
                                {/* <IconButton target={'_blank'} href="https://www.facebook.com/abduljabbar3200/" aria-label="fingerprint">
                                    <FacebookOutlinedIcon htmlColor='white' />
                                </IconButton>
                                <IconButton target={'_blank'} href="https://github.com/abduljabbar15" aria-label="fingerprint">
                                    <GitHubIcon htmlColor='white' />
                                </IconButton>
                                <IconButton target={'_blank'} href="https://www.instagram.com/abdul_jabbar153/" aria-label="fingerprint">
                                    <InstagramIcon htmlColor='white' />
                                </IconButton>
                                <IconButton target={'_blank'} href="https://www.linkedin.com/in/abduljabbar1532002/" aria-label="fingerprint">
                                    <LinkedInIcon htmlColor='white' />
                                </IconButton>
                                <IconButton target={'_blank'} href="https://www.facebook.com/abduljabbar3200/" aria-label="fingerprint">
                                    <TwitterIcon htmlColor='white' />
                                </IconButton> */}
                                <SocialLinks></SocialLinks>
                            </Stack>
                            <br />


                            <Typography my={3} variant='body1' sx={{}} >I’m a Front-End Developer located in Dhaka Bangladesh. I have rich Skills in web site design and building and customization, also I am good at React.</Typography>
                        </Box>


                        <Grid container spacing={2}>

                            <Grid item xs={12} textAlign={'start'} md={6}>
                                {/* <ShortBio></ShortBio> */}
                                <Typography variant='h4' textAlign={'center'}>Hi,</Typography>
                                <Typography variant='body1' >  I’m a Abdul jabbar, I have a serious passion for creating intuitive, dynamic user experiences.
                                    Interested in the entire frontend spectrum and working on ambitious projects with positive people. I'm experienced in developing websites which are fully responsive to all kind of devices. I have the ability to write semantic, cross-browser compatible, clean code by hand that is re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, JavaScript (with React). I also have intermediate knowledge of Node.js, express.js & MongoDB. So if you are looking for a front-end developer for your company, I can be the solution you're looking for.</Typography><br />
                                <Typography variant='body1' >Although I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! &nbsp;<a style={{ color: 'white' }} href='/home/#fom'><Button
                                    size='small'
                                    className='btn' color='secondary' variant='secondary' sx={{ borderRadius: '5x', backgroundColor: '#FF4C60' }} >Contact me</Button>
                                </a></Typography>
                                <br /><br />

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Skills</Typography>
                                <Box>
                                    <Box mb={2}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant='button'>HTML/CSS </Typography>
                                            <span>{progress1}%</span>
                                        </Box>
                                        <Box sx={{ width: "100%", borderRadius: '50px' }}>
                                            <LinearProgress id="VolumeBar" color='primary' variant="determinate" sx={{ height: '10px', borderRadius: '10px' }} value={progress1} />
                                        </Box>
                                    </Box>
                                    <Box mb={2}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant='button'>JavaScript</Typography>
                                            <span>{progress2}%</span>
                                        </Box>
                                        <Box sx={{ backgroundColor: 'red', width: "100%", borderRadius: '50px' }}>
                                            <LinearProgress id="VolumeBar1" color='secondary' variant="determinate" value={progress2} />
                                        </Box>
                                    </Box>
                                    <Box mb={2}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant='button'>Bootstrap/Material ui</Typography>
                                            <span>{progress3}%</span>
                                        </Box>
                                        <Box sx={{ backgroundColor: 'red', width: "100%", borderRadius: '50px' }}>
                                            <LinearProgress id="VolumeBar2" style={{ backgroundColor: '#ffabb4' }} variant="determinate" value={progress3} />
                                        </Box>
                                    </Box>
                                    <Box mb={2}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant='button'>react  </Typography>
                                            <span>{progress4}%</span>
                                        </Box>
                                        <Box sx={{ width: "100%", borderRadius: '50px' }}>
                                            <LinearProgress id="VolumeBar3" color='primary' variant="determinate" style={{ backgroundColor: '#fffbe0' }} sx={{ height: '10px', borderRadius: '10px' }} value={progress4} />
                                        </Box>
                                    </Box>
                                    <Box mb={2}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant='button'>node js/express js</Typography>
                                            <span>{progress5}%</span>
                                        </Box>
                                        <Box sx={{ backgroundColor: 'red', width: "100%", borderRadius: '50px' }}>
                                            <LinearProgress id="VolumeBar4" style={{ backgroundColor: '#90facc' }} color='secondary' variant="determinate" value={progress5} />
                                        </Box>
                                    </Box>
                                    <Box mb={2}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Typography variant='button'>adobe photoshop/illustrator</Typography>
                                            <span>{progress6}%</span>
                                        </Box>
                                        <Box sx={{ backgroundColor: 'red', width: "100%", borderRadius: '50px' }}>
                                            <LinearProgress id="VolumeBar5" style={{ backgroundColor: '#88ecfe' }} variant="determinate" value={progress6} />
                                        </Box>
                                    </Box>

                                </Box>
                                {/* <p>&nbsp;<img width={'100%'} align="center" src="https://github-readme-stats.vercel.app/api?username=abduljabbar15&show_icons=true&locale=en" alt="abduljabbar15" /></p> */}
                            </Grid>


                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DevAboutMe;