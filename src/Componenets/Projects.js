import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ContactForm from './ContactForm';
import './Projects.css'
const Projects = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Typography variant='h4'>Recent Projects</Typography>
            <br />
            <Grid container spacing={2} >
                <Grid item xs={12} md={4}>
                    <div class="grid">
                        <figure class="effect-sadie">
                            <img src={`https://i.ibb.co/wJSNzXc/Screenshot-2021-11-29-170004.png`} alt="img02" />
                            <figcaption>
                                <h2>D <span>COM</span></h2>
                                <p>Conversion is a premium react landing page. Its great structure and clean.</p>
                                <a href="https://d-com-aj.web.app/">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div class="grid">
                        <figure class="effect-sadie">
                            <img src="https://i.ibb.co/hMdZdCX/Screenshot-2021-11-29-170112.png" alt="img02" />
                            <figcaption>
                                <h2>Trav <span>North</span></h2>
                                <p>This template is suitable for travel,  tour booking, travel booking, <br /> tourism, and resort website. </p>
                                <a href="https://travnorth-15.web.app/">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div class="grid">
                        <figure class="effect-sadie">
                            <img src="https://i.ibb.co/r4mnNRJ/Screenshot-2021-11-29-170435.png" alt="img02" />
                            <figcaption>
                                <h2>Medicare <span>Pharmacy</span></h2>
                                <p>MediTro is a Fully Creative Mobile Responsive React Template.</p>
                                <a href="https://medi-care10.web.app/">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </Grid>
            </Grid>
            <ContactForm></ContactForm>
        </Container>
    );
};

export default Projects;