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
    const navs = [
        {
            url: '/home',
            title: 'Home',
            icon: <HomeIcon />
        }, {
            url: '/projects',
            title: 'Project',
            icon: <TimelineIcon />
        }, {
            url: '/aboutme',
            title: 'About me',
            icon: <LocalLibraryIcon />
        },
    ]

    return (
        <Box minWidth={{ xs: 320, sm: 400, md: 500 }} className='d' sx={{ zIndex: 9999, position: 'fixed'}}>

            {
                navs?.map(nav => <Tooltip key={nav} title={nav.title}><NavLink to={nav.url} style={{padding:'10px 0 '}}>

                    <BottomNavigationAction sx={{ color: '#fff' }} icon={nav.icon} />

                </NavLink>
                </Tooltip>)
            }
            {/* <Tooltip  title="Blogs"><NavLink to={'/blogs'}>  <BottomNavigationAction sx={{ color: '#fff' }} icon={<NewspaperIcon />} /></NavLink></Tooltip> */}

        </Box>
    );
};

export default Navigator;