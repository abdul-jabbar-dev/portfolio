import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import developerImg from './Avatar.png'
import React, { useState, useEffect } from 'react';
import './style.css'
import TextMotion from './TextMotion';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SocialLinks from '../Utility/SocialLinks';
import apiFech from '../api/Fech';
const Developer = () => {
    const [cv, setCv] = useState({});

    useEffect(() => {

        apiFech.getProjectAll('http://api.abduljabbar.xyz/sociallinks', (res) => {
            setCv(res.find(data => data.cv))
        })
    }, [])

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.txt`;
        link.href = cv.cv;
        link.setAttribute('target', '_blank')
        link.click();
    };
    return (<>
        <Box textAlign={'center'} height={"100vh"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box display={'flex'} gap={'50px'} sx={{ flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                <Avatar
                    alt="Abdul jabbar avatar"
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
                            <SocialLinks></SocialLinks>
                        </Stack>

                    </Box><br /><br />
                    <Button target={'_blank'} className='btn' color='secondary' variant='secondary' sx={{ letterSpacing: '3px', borderRadius: '20px', py: 1.3, backgroundColor: '#FF4C60' }} startIcon={<ArrowCircleDownIcon />} onClick={onDownload}>Download cv</Button>
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