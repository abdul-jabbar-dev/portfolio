import { Box, TextField } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setDataLocal } from '../Utility/localStore';
const AdminLogin = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const validation = (e) => {
        if (e.key === "Enter") {
            if (e.target.value === '1532002') {
                setDataLocal('user','', true)
                navigate(from);
            } else {
                alert('error password')
            }
        } else {

        }
    }
    return (
        <Box mt={8} >
            <TextField
                onKeyDown={(e) => validation(e)}
                label="Enter Your Pin"
                id="filled-size-normal"
                variant='outlined'
                color='primary'
                autoCorrect={'false'}
                spellCheck={'false'}
                sx={{ input: { color: 'gray', letterSpacing: '3px', fontWeight: "200" } }}
            />
        </Box>
    );
};

export default AdminLogin;