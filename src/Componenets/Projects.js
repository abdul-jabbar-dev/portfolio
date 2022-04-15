import { Container, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';



import './Projects.css'
import { Link } from 'react-router-dom';
import apiFech from '../api/Fech';
// import contextApi from '../Context/ContextApi';
// import dataApi from '../Context/ContextApi';
const Projects = () => {
    const [devProjects, setDevProjects] = useState([])
    const [loding, setLoding] = useState(false)
    useEffect(() => {
        setLoding(true)
        apiFech.getProjectAll('http://localhost:2001/projects', (res) => setDevProjects(res), null, (finaly) => setLoding(false))
    }, [])

    // dataApi.getProjects()
    return (
        <Container sx={{ my: 10 }}>
            <Typography variant='h4'>Recent Projects</Typography>
            <br />
            <Grid container spacing={2} >
                {loding ? (Array.from(new Array(6))).map((e, index) =>
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Skeleton animation="wave" sx={{ bgcolor: 'red.900', borderRadius: '10px' }} height='350px' />
                    </Grid>
                )
                    :
                    devProjects.map((e, index) =>
                        <Grid key={e._id} item xs={12} sm={6} md={4}>
                            <div className="grid">
                                <figure className="effect-sadie">
                                    {<img src={e.siteThumbnail} /* src={e.img1} */ alt="img02" />}
                                    <figcaption>
                                        <h2>{e.websiteName?.split(' ')[0]} <span>{e.websiteName?.split(' ')[1]}</span> </h2>
                                        <p>{e.discription}</p>
                                        <a href={e.link}>View more</a>
                                        <Link to={`/projects/${e._id}`}></Link>
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