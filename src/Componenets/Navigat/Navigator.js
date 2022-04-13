import React, { useState } from 'react';
import Box from '@mui/material/Box';
import '../style.css'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const Navigator = () => {
    const [value, setValue] = useState(0);

    return (
        <Box minWidth={{ xs: 320, sm: 400, md: 500 }} className='d' sx={{ zIndex: 9999, position: 'fixed' }}>
            <BottomNavigation
                sx={{ bgcolor: '#302F4E', borderRadius: 3 }}
                value={value}

                onChange={(event, newValue) => {
                    console.log(event);
                    setValue(newValue);
                }}
            >
                <Tooltip title="Home"><NavLink to={'/home'}> <BottomNavigationAction sx={{ color: '#fff' }} icon={<HomeIcon />} /> </NavLink></Tooltip>
                <Tooltip title="Project"><NavLink to={'/projects'}> <BottomNavigationAction sx={{ color: '#fff' }} icon={<TimelineIcon />} /></NavLink></Tooltip>
                <Tooltip title="About me"><NavLink to={'/aboutme'}> <BottomNavigationAction sx={{ color: '#fff' }} icon={<LocalLibraryIcon />} /></NavLink></Tooltip>
                {/* <Tooltip  title="Blogs"><NavLink to={'/blogs'}>  <BottomNavigationAction sx={{ color: '#fff' }} icon={<NewspaperIcon />} /></NavLink></Tooltip> */}

            </BottomNavigation>
        </Box>
    );
};

export default Navigator;