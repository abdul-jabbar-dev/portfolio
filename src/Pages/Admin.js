import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';/* import NotificationsIcon from '@mui/icons-material/Notifications'; */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';/* import EditIcon from '@mui/icons-material/Edit'; */
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';/* import AssignmentIcon from '@mui/icons-material/Assignment'; */
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';/* import SettingsIcon from '@mui/icons-material/Settings'; */
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {

    return (
        <div style={{ margin: "50px" }}>
            <AdminNav></AdminNav>
            <Outlet></Outlet>

        </div>
    );
};
const AdminNav = () => {
    return (
        <>

            <Box mt={'80px'} sx={{ display: 'flex', justifyContent: { sm: 'center', md: 'space-between' } }}>
                <Box></Box>
                <Box width={{ md: '40%', sm: '80%', lg: '20%', xs: '100%' }} sx={{ display: 'flex', justifyContent: 'space-evenly', paddingY: '10px', backgroundColor: '#302F4E', borderRadius: '10px' }}>
                    <NavLink to={'mails'}><NotificationsNoneOutlinedIcon fontSize="medium" style={{ color: 'white' }} /></NavLink>
                    <NavLink to={'projects'}><AssignmentOutlinedIcon fontSize="medium" style={{ color: 'white' }} /></NavLink>
                    <NavLink to={'settings'}><SettingsOutlinedIcon fontSize="medium" style={{ color: 'white' }} /></NavLink>
                    <NavLink to={'pagedite'}><EditOutlinedIcon fontSize="medium" style={{ color: 'white' }} /></NavLink>
                    <LogoutIcon fontSize="medium" style={{ color: 'white' }} />
                </Box>
            </Box>
        </>

    )
}

export default Admin;