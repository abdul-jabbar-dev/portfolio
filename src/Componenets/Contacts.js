import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import './style.css'
import TextField from '@mui/material/TextField';
const Contacts = () => {
    const [state, handleSubmit] = useForm("mbjwrkvj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Container sx={{ bgcolor: 'white', borderRadius: '5px', my: 20 }} >
            <Grid  container sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Grid item mt={2} >
                    <Typography variant='h4' fontWeight={900} color={'#353353'}>Contact With me</Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box pb={5} component="form" onSubmit={handleSubmit} noValidate color={'#fff'} sx={{ mt: 1 }}>
                        <TextField
                            sx={{ color: 'white' }}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <TextField
                            sx={{ color: 'white' }}
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="name"
                            type="name"
                            id="name"
                            autoComplete="full-Name"
                        />
                        <TextField
                            sx={{ color: 'white' }}
                            margin="normal"
                            required
                            fullWidth
                            label="Enter your message"
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <Button
                            disabled={state.submitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Contacts;