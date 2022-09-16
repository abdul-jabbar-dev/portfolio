import { Box, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const EditProfile = () => {
    return (
        <Container>
            <Box width={`50%`} sx={{ backgroundColor: '#302F4E', borderRadius: '10px', p: 6 }}>
                <Box display={'flex '} gap={5} mb={2}>
                    <Typography variant='h6' color={"lightGray"}>Facebook</Typography>
                    <TextField fullWidth sx={{ input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                </Box>
                <Box display={'flex '} gap={5} mb={2}>
                    <Typography variant='h6' color={"lightGray"}>Github</Typography>
                    <TextField fullWidth sx={{ input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                </Box>
                <Box display={'flex '} gap={5} mb={2}>
                    <Typography variant='h6' color={"lightGray"}>Instagram</Typography>
                    <TextField fullWidth sx={{ input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                </Box>
                <Box display={'flex  '} gap={5} mb={2}>
                    <Typography variant='h6' color={"lightGray"}>Linkedin</Typography>
                    <TextField fullWidth sx={{ input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                </Box>
                <Box display={'flex  '} gap={5} mb={2}>
                    <Typography variant='h6' color={"lightGray"}>Twitter</Typography>
                    <TextField fullWidth sx={{ input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                </Box>
            </Box>
        </Container>
    );
};

export default EditProfile;