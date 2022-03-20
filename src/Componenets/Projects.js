import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Projects.css'
import { Link } from 'react-router-dom';
const Projects = () => {
    const [devProjects, setDevProjects] = useState([])
    console.log(devProjects);
    useEffect(() => {
        fetch('http://localhost:2001/projects')
            .then(res => res.json())
            .then(data => setDevProjects(data))
    }, [])
    return (
        <Container sx={{ my: 10 }}>
            <Typography variant='h4'>Recent Projects</Typography>
            <br />
            <Grid container spacing={2} >
                {
                    devProjects.map((e) =>
                        <Grid key={e._id} item xs={12} sm={6} md={4}>
                            <div className="grid">
                                <figure className="effect-sadie">
                                    {<img src={`data:image/png;base64,${e.siteThumbnail}`} /* src={e.img1} */ alt="img02" />}
                                    <figcaption>
                                        <h2>{e.websiteName.split(' ')[0]} <span>{e.websiteName.split(' ')[1]}</span> </h2>
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