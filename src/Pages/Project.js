import { Container, Typography, Box, Grid, Stack, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myProject } from '../allProjects';
import CircularProgress from '@mui/material/CircularProgress';
import '../Componenets/style.css'


const Project = () => {
    const [spin, setSpin] = useState(false)
    const { id } = useParams()
    const [devProject, setDevProject] = useState([])
    useEffect(() => {
        setSpin(true)
        setDevProject(myProject.find((e) => {
            setSpin(false)
            setImgS(devProject.img1)
            return (e.id === parseInt(id))
        }))
    }, [devProject.img1, id])

    const [imgS, setImgS] = useState(devProject.img1)
    console.log(imgS);
    // console.log(a)
    return (
        <Container sx={{ mt: 9, bgcolor: '#302F4E', borderRadius: '10px' }}>
            {
                !spin ? <Box>
                    <Typography variant='h3' py={5} sx={{ textTransform: 'uppercase' }} mt={6}>{devProject.pName}</Typography>
                    <Box>
                        <img style={{ borderRadius: '10px' }} src={imgS} width={'100%'} alt="" />
                    </Box>
                    <Grid justifyContent={'center'} mt={'5px'} spacing={5} container>
                        <Grid xs={3} item>
                            <img onClick={e => setImgS(e.target.src)} className='hoverEffect' src={devProject.img1} alt='website' width={'100%'} />
                        </Grid>
                        <Grid xs={3} item>
                            <img onClick={e => setImgS(e.target.src)} className='hoverEffect' src={devProject.img2} alt='website' width={'100%'} />
                        </Grid>
                        <Grid xs={3} item>
                            <img onClick={e => setImgS(e.target.src)} className='hoverEffect' src={devProject.img3} alt='website' width={'100%'} />
                        </Grid>
                    </Grid>
                    <Stack my={6} spacing={2} justifyContent='center' direction="row">
                        <Button variant="outlined" onClick={() => window.open(devProject.liveSite)} color="warning" size='large'>Demo site</Button>
                        <Button variant="outlined" onClick={() => window.open(devProject.clientSite)} size='large'>Client site code</Button>
                        <Button variant="outlined" disabled={!devProject.serverSite} onClick={() => window.open(devProject.serverSite)} size='large'>server site code</Button>
                    </Stack>
                    <Box textAlign={'start'} maxWidth={'600px'} py={6}>
                        <Typography variant='h6'>{devProject.discription}</Typography><br />
                        <Typography fontWeight={'300'} variant='h4'>Technology.</Typography>
                        <Typography fontWeight={'300'} variant='body1'>{devProject.technology}</Typography><br />
                        <Typography  variant='h4'>Facilities</Typography>
                        <Typography fontWeight={'300'} variant='body1'>{devProject.fecilites}</Typography>

                    </Box>

                </Box>
                    : <CircularProgress />
            }
        </Container>

    );
};

export default Project;