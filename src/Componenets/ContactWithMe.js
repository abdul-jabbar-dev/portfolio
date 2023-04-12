import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './style.css'
import commentImg from './bubble.png'
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import apiFech from '../api/Fech';

const ContactWithMe = () => {


    const [contact, setContact] = useState({});
    const [state, handleSubmit] = useForm("mbjwrkvj");

    if (state.succeeded) {


        return <p>Thanks for contact!</p>;
    }

    const sendDataBase = (e) => {
        if (contact.email && contact.name && contact.message) {
            apiFech.postProject('https://determined-cyan-vest.cyclic.app/notification', { headers: { 'content-type': 'application/json', }, body: JSON.stringify(contact) }, res => {

            })
        }
    }
    return (
        <Container sx={{ p: 6, }} >
            <Box>
                <Typography py={5} variant='h4'>Contact With me</Typography>
            </Box>
            <Grid justifyContent={'center'} alignContent={'center'} alignItems={'stretch'} sx={{ bgcolor: ' #302F4E', p: 5, borderRadius: 3, 'fieldset': { border: '1px solid #302F4E' } }} container>
                <Grid xs={4} item>
                    <img width={'100%'} src={commentImg} alt="" />
                </Grid>
                <Grid xs={12} sm={8} item sx={{ p: 2, textShadow: '0px 0 #25253b;' }} >
                    <form sx={{ 'input': { color: 'lightGray !important', backgroundColor: '#353353 !important' } }} onSubmit={handleSubmit} id='fom'>
                        <TextField
                            required
                            fullWidth
                            onChange={e => setContact({ ...contact, name: e.target.value })}
                            id="name"
                            sx={{ 'input': { color: 'lightGray !important', backgroundColor: '#353353 !important', borderRadius: '5px' }, 'label': { color: 'lightGray' } }}
                            // inputProps={{ style: { backgroundColor: '#353353',borderRadius:'5px' } }}
                            type="name"
                            label='Enter Your Name'
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />

                        <TextField

                            sx={{ my: 3, 'input': { color: 'lightGray !important', backgroundColor: '#353353 !important', borderRadius: '5px' }, 'label': { color: 'lightGray' } }}
                            fullWidth
                            required
                            id="email"
                            onChange={e => setContact({ ...contact, email: e.target.value })}
                            type="email"
                            label='Enter Your Email'
                            name="email"
                        />
                        <ValidationError

                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <br />

                        <TextField
                            fullWidth
                            required
                            sx={{ ' div': { color: '#fff !important', backgroundColor: '#353353 !important', borderRadius: '5px' }, 'label': { color: 'lightGray' } }}
                            multiline
                            onChange={e => setContact({ ...contact, message: e.target.value })}
                            rows={4}
                            id="message"
                            name="message"
                            label="What's Your Message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <Button
                            endIcon={<SendIcon />}
                            type="submit"
                            disabled={state.submitting}
                            variant="contained"
                            color='secondary'
                            size='large'
                            sx={{ mt: 3, mb: 2 }}
                            onClick={e => sendDataBase(e)}
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactWithMe;