import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import apiFech from '../../../api/Fech';

const MailsMaintain = () => {

    const [notifications, setNotifications] = useState([]);

    const del_notification = (link) => {
        const confirmDel = window.confirm("If you want to delete")
        confirmDel && apiFech.rmProject(`https://determined-cyan-vest.cyclic.app/notification/${link._id}`, {}, (res => res.deletedCount === 1 ? alert("Delete successfully") : alert("Delete unsuccessfully")))
    }
    useEffect(() => {
        apiFech.getProjectAll('https://determined-cyan-vest.cyclic.app/notification', (res => setNotifications(res)))
    }, [])
    return (
        <Container>
            <List sx={{ width: '100%', bgcolor: '#302F4E' }}>
                {
                    notifications.map((item) => <ListItem alignItems="flex-start" key={item}>
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
                                    </Typography><DeleteIcon fontSize='.5rem' sx={{ transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'red', fontSize: '1.3rem' } }} onClick={e => del_notification(item)}></DeleteIcon>
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