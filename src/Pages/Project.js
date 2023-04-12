import { Container, Typography, Box, Grid, Stack, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import '../Componenets/style.css'
import apiFech from '../api/Fech';

const Project = () => {
    const [spin, setSpin] = useState(false)
    const { id } = useParams()
    const [devProject, setDevProject] = useState([])
    const { websiteName, liveLink, clientLink, serverLink, discription, fecilites, technology, siteThumbnail } = devProject
    useEffect(() => {
        setSpin(true)
        apiFech.getProjectAll(`https://determined-cyan-vest.cyclic.app/projects/${id}`, data => {
            setDevProject(data)

            setSpin(false)

        })
    }, [id])

    const [imgS, setImgS] = useState(devProject.siteThumbnail)

    return (
        <Container sx={{ mt: 9, bgcolor: '#302F4E', borderRadius: '10px' }}>


            {
                !spin ? <Box>
                    <Typography variant='h3' py={5} sx={{ textTransform: 'uppercase' }} mt={6}>{websiteName}</Typography>
                    <Box>
                        <img style={{ borderRadius: '10px' }} src={siteThumbnail} width={'100%'} alt={websiteName + " project image"} />
                    </Box>
                    <Grid justifyContent={'center'} mt={'5px'} spacing={5} container>
                        <Grid xs={3} item>
                            <img onClick={e => setImgS(e.target.src)} className='hoverEffect' src={devProject?.siteScreenShort0} alt={websiteName + " project screen short"} width={'100%'} />
                        </Grid>
                        <Grid xs={3} item>
                            <img onClick={e => setImgS(e.target.src)} className='hoverEffect' src={devProject?.siteScreenShort1} alt={websiteName + " project screen short"} width={'100%'} />
                        </Grid>
                        <Grid xs={3} item>
                            <img onClick={e => setImgS(e.target.src)} className='hoverEffect' src={devProject?.siteScreenShort2} alt={websiteName + " project screen short"} width={'100%'} />
                        </Grid>
                    </Grid>
                    <Stack my={6} spacing={2} justifyContent='center' direction="row">
                        <Button variant="outlined" onClick={() => window.open(liveLink)} color="warning" size='large'>Demo site</Button>
                        <Button variant="outlined" onClick={() => window.open(clientLink)} size='large'>Client site code</Button>
                        <Button variant="outlined" disabled={!serverLink} onClick={() => window.open(serverLink)} size='large'>server site code</Button>
                    </Stack>
                    <Box textAlign={'start'} maxWidth={'600px'} py={6}>
                        <Typography variant='h6'>{discription}</Typography><br />
                        <Typography fontWeight={'300'} variant='h4'>Technology.</Typography>
                        <Typography fontWeight={'300'} variant='body1'>{technology}</Typography><br />
                        <Typography variant='h4'>Facilities</Typography>
                        <Typography fontWeight={'300'} variant='body1'>{fecilites}</Typography>

                    </Box>

                </Box>
                    : <CircularProgress />
            }
        </Container>

    );
};

export default Project;