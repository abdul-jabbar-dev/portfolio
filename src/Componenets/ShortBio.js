import { Grid } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/system';
const ShortBio = () => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, }}

        >
            <Box>
                <ListItem>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <AlternateEmailIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                </ListItem>
            </Box>

            <Box>
                <ListItem>
                    <ListItemIcon>
                        <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <WhatsAppIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                </ListItem>
            </Box>


        </List>
    );
};

export default ShortBio;