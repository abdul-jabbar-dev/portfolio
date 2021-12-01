import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import './style.css'
import Languages from './Languages';


const About = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress1(85);
            setProgress2(80)
            setProgress3(65)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box height={'100vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} mt={5}>
            <Box width={'100%'}>
                <Typography fontWeight={700} variant='h4'>Short summary</Typography>
                <br /><br />
                <Container >
                    <Box borderRadius={'20px'} bgcolor={'#302F4E'}>
                        <Grid textAlign={'start'} container py={7}>
                            <Grid px={3} xs={12} md={6} item>

                                <Box mb={2}>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Typography variant='button'>react developer </Typography>
                                        <span>{progress1}%</span>
                                    </Box>
                                    <Box sx={{ width: "100%", borderRadius: '50px' }}>
                                        <LinearProgress id="VolumeBar" color='primary' variant="determinate" style={{}} sx={{ height: '10px', borderRadius: '10px' }} value={progress1} />
                                    </Box>
                                </Box>
                                <Box mb={2}>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Typography variant='button'>front end developer</Typography>
                                        <span>{progress2}%</span>
                                    </Box>
                                    <Box sx={{ backgroundColor: 'red', width: "100%", borderRadius: '50px' }}>
                                        <LinearProgress id="VolumeBar1" color='secondary' variant="determinate" value={progress2} />
                                    </Box>
                                </Box>
                                <Box>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Typography variant='button'>backend developer</Typography>
                                        <span>{progress3}%</span>
                                    </Box>
                                    <Box sx={{ backgroundColor: 'red', width: "100%", borderRadius: '50px' }}>
                                        <LinearProgress id="VolumeBar2" style={{ backgroundColor: '#ffabb4' }} variant="determinate" value={progress3} />
                                    </Box>
                                </Box><br />

                            </Grid >
                            <Grid px={5} xs={12} md={6} item>
                                <Typography fontWeight={200} variant='body1'>I am Abdul jabbar, web developer from Dhaka, Bangladesh. I have rich Skills in web site design and building and customization, also I am good at React.</Typography><br />
                                <a style={{ color: 'white' }} href='#fom'><Button className='btn' color='secondary' variant='secondary' sx={{ borderRadius: '20px', py: 1.3, backgroundColor: '#FF4C60' }} >Contact me</Button>
                                </a>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box><br /><br />
            <Languages></Languages>
        </Box>
    );
};

export default About;