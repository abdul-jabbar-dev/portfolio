import { Container, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Projects.css'

import apiFech from '../api/Fech';
import HelmetMeta from './Custom Meta/HelmetMeta';
const Projects = ({ limit = 16 }) => {
    const [devProjects, setDevProjects] = useState([])
    const [loding, setLoding] = useState(false)
    useEffect(() => {
        setLoding(true)
        apiFech.getProjectAll('http://localhost:2001/projects', (res) => setDevProjects(res), null, (finaly) => setLoding(false))
    }, [])

    return (
        <Container sx={{ my: 10 }}>
            {
                window.location.pathname === '/projects' && <HelmetMeta pageName='Abdul Jabbar -Showcase' keywords='project, react projects , free projects,showcase'></HelmetMeta>
            }

            <Typography variant='h4'>Recent Projects</Typography>
            <br />
            <Grid container spacing={2} >
                {loding ? (Array.from(new Array(6))).map((e, index) =>
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Skeleton animation="wave" sx={{ bgcolor: 'red.900', borderRadius: '10px' }} height='350px' />
                    </Grid>
                )
                    :
                    devProjects.slice(0, limit).map((e, index) =>
                        <Grid key={e._id} item xs={12} sm={6} md={4}>
                            <div className="grid">
                                <figure className="effect-sadie pointer" >
                                    {<img src={e.siteThumbnail} alt={e.websiteName} />}
                                    <figcaption>
                                        <Typography color={'lightgray'}>Click here</Typography>
                                        <a target='_blank' rel="noreferrer" href={e.liveLink}>View more</a>
                                        {/* <Link hrefLang={e.liveLink}></Link> */}
                                    </figcaption>
                                </figure>
                            </div>
                        </Grid>

                    )
                }
            </Grid>
        </Container>
    );
};

export default Projects;