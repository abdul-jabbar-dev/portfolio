import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import developerImg from './Avatar.png'
import React from 'react';
import './style.css'
import TextMotion from './TextMotion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'; import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
const Developer = () => {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.txt`;
        link.href = "https://drive.google.com/u/2/uc?id=18Zegu6aCHvo1Cp9G5olgH63qElKqgo1D&export=download";
        link.click();
    };

    return (<>
        <Box textAlign={'center'} height={"100vh"}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} gap={'50px'} sx={{ flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                <Avatar
                    alt="Remy Sharp"
                    src={developerImg}

                    sx={{ width: 150, height: 150, }}
                />
                <Box textAlign={'center'}>
                    <Typography fontWeight={'bold'} variant='h3'>Abdul jabbar</Typography>
                    <br />
                    <TextMotion></TextMotion><br />
                    <Box mx={'auto'} sx={{
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}>
                        <Stack direction="row" spacing={1}>

                            <IconButton target={'_blank'} href="https://www.facebook.com/abduljabbar3200/" aria-label="fingerprint">
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
                            </IconButton>
                        </Stack>

                    </Box><br /><br />
                    <Button className='btn' color='secondary' variant='secondary' sx={{ borderRadius: '20px', py: 1.3, backgroundColor: '#FF4C60' }} startIcon={<ArrowCircleDownIcon />} onClick={onDownload}>Download cv</Button>
                </Box>
            </Box>
            <div class="scrollContainer">
                <div class="field">
                    <div class="mouse"></div>

                </div>
            </div>
        </Box>
        
        </>
    );
};

export default Developer;