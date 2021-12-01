import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Projects.css'
import { myProject } from '../allProjects'
import { Link } from 'react-router-dom';
const Projects = () => {
    const [devProjects, setDevProjects] = useState([])
    useEffect(() => {
        setDevProjects(myProject)
    }, [])
    return (
        <Container sx={{ my: 10 }}>
            <Typography variant='h4'>Recent Projects</Typography>
            <br />
            <Grid container spacing={2} >
                {
                    devProjects.map((e) =>
                        <Grid key={e.id} item xs={12} sm={6}md={4}>
                            <div className="grid">
                                <figure className="effect-sadie">
                                    <img src={e.img1} alt="img02" />
                                    <figcaption>
                                        <h2>{e.pName.split(' ')[0]} <span>{e.pName.split(' ')[1]}</span> </h2>
                                        <p>{e.discription}</p>
                                        {/* <a href={e.link}>View more</a> */}
                                        <Link to={`/projects/${e.id}`}></Link>
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