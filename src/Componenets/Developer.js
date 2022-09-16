import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import developerImg from './Avatar.png'
import React, { useEffect, useState } from 'react';
import './style.css'
import TextMotion from './TextMotion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'; import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import apiFech from '../api/Fech';
const Developer = () => {
    const [links, setLinks] = useState({})
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.txt`;
        link.href = "https://drive.google.com/u/0/uc?id=10BYdNG36oRXNG0aTIDytlsGTb_q0eH7b&export=download";
        link.click();
    };
    useEffect(() => {
        apiFech.getProjectAll('http://localhost:2001/sociallinks', async (res) => await setLinks(res))
    }, []);
    const socialIcon = [{
        icon: <FacebookOutlinedIcon htmlColor='white' />,
        name: 'facebook',
    }, {
        icon: <GitHubIcon htmlColor='white' />,
        name: 'GitHub',
    }, {
        icon: <LinkedInIcon htmlColor='white' />,
        name: 'Linkedin',
    }, {
        icon: <TwitterIcon htmlColor='white' />,
        name: 'Twitter',
    }, {
        icon: <InstagramIcon htmlColor='white' />,
        name: 'Instagram',
    },
    ]

    return (<>
        <Box textAlign={'center'} height={"100vh"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} gap={'50px'} sx={{ flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                <Avatar
                    alt="Remy Sharp"
                    src={developerImg}

                    sx={{ width: 150, height: 150, }}
                />
                <Box textAlign={'center'}>
                    <Typography fontWeight={'bold'} variant='h3' sx={{ textTransform: 'uppercase', letterSpacing: '6px' }} >Abdul jabbar</Typography>
                    <br />
                    <TextMotion></TextMotion><br />
                    <Box mx={'auto'} sx={{
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}>
                        <Stack direction="row" spacing={1}>
                            {links.length ? socialIcon?.map((ico, i) => <IconButton key={i} target={'_blank'} href={links?.find(re => re?.name?.toUpperCase() === ico?.name.toUpperCase())?.url} aria-label="fingerprint">
                                {ico.icon}
                            </IconButton>) : ''}
                        </Stack>

                    </Box><br /><br />
                    <Button className='btn' color='secondary' variant='secondary' sx={{ letterSpacing: '3px', borderRadius: '20px', py: 1.3, backgroundColor: '#FF4C60' }} startIcon={<ArrowCircleDownIcon />} onClick={onDownload}>Download cv</Button>
                </Box>
            </Box>
            <div className="scrollContainer">
                <div className="field">
                    <div className="mouse"></div>

                </div>
            </div>
        </Box>

    </>
    );
};

export default Developer;