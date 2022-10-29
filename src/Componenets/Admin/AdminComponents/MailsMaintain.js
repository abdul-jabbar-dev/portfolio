import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiFech from '../../../api/Fech';

const MailsMaintain = () => {

    const [notifications, setNotifications] = useState([]);


    useEffect(() => {
        apiFech.getProjectAll('http://localhost:2001/notification', (res => setNotifications(res)))
    }, [])
    return (
        <Container>
            <List sx={{ width: '100%', bgcolor: '#302F4E' }}>
                {
                    notifications.map((item) => <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'gray' }}>{item.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Box>
                                <Typography>{item.name}</Typography>
                                <Typography>{" — " + item.message}</Typography>
                            </Box>}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="white"
                                    >
                                        {item.email}
                                    </Typography>
                                    <Typography
                                        sx={{ display: 'inline', fontSize: '0.8rem', fontWeight: 'light' }}
                                        component="span"
                                        variant="body2"
                                        color="lightGray"
                                    >
                                        {" / " + new Date(Date(item.postDate)).toUTCString()}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>)
                }
            </List>
        </Container>
    );
};

export default MailsMaintain;