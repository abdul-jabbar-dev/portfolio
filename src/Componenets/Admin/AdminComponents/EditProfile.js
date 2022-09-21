import {Box, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiFech from '../../../api/Fech';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const EditProfile = () => {
    const [socialLinks, setsocialLinks] = useState([])
    const [newSocialLinks, setNewSocialLinks] = useState({})
    const [sending, setSending] = useState(false)

    useEffect(() => {
        apiFech.getProjectAll('https://determined-cyan-vest.cyclic.app/sociallinks', (res => setsocialLinks(res)))
    }, [sending])

    const send_link = () => {


        if (newSocialLinks.name && newSocialLinks.url && newSocialLinks.priority) {

            apiFech.postProject('https://determined-cyan-vest.cyclic.app/sociallinks', { headers: { 'content-type': 'application/json', }, body: JSON.stringify(newSocialLinks) }, (res => console.log(res)), '', () => setSending(true))
        }


    }
    sending && setTimeout(() => {
        setSending(false)
        console.log('d')
    }, 3000);
    return (
        <><Container>
            <Box width={{ lg: '50%' }} sx={{ backgroundColor: '#302F4E', borderRadius: '10px', p: 6 }}>
                {
                    socialLinks.length === 0 ? "Empty social links" : socialLinks.map((link, i) => <Box ><Box display={'flex '} flexDirection={{ xs: 'column', md: 'row', }} gap={5} >
                        <Typography variant='h6' color={"lightGray"}>{link.name}</Typography>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <TextField sx={{ boxShadow: '5px 10px 10px 0px rgb(0 0 0 / 4%)', width: '75%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} placeholder={link.url} variant='outlined' size='small'></TextField>
                            <TextField sx={{ boxShadow: '5px 10px 10px 0px rgb(0 0 0 / 4%)', width: '20%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} placeholder={link.priority} variant='outlined' size='small'></TextField>
                        </Box>
                        <Box display={'flex'} gap={2}>
                            <DoneIcon></DoneIcon>
                            <DeleteIcon></DeleteIcon>
                        </Box>

                    </Box>
                        {i !== socialLinks.length - 1 && <hr style={{ width: '80%', border: '0', borderTop: '.5px solid gray', margin: 'auto', opacity: '0.1', marginTop: '5px', marginBottom: '10px' }}></hr>}
                    </Box>)
                }
                <hr style={{ width: '90%', border: '0', borderTop: '.5px solid gray', margin: 'auto', marginTop: '20px', opacity: '0.3' }}></hr>
                <Box display={'flex '} gap={2} my={2} alignItems={'center'} >
                    <TextField onChange={res => setNewSocialLinks({ ...newSocialLinks, name: res.target.value })} placeholder='Social media Name' sx={{ input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                    <Box display={'flex'} gap={2}>
                        <TextField onChange={res => setNewSocialLinks({ ...newSocialLinks, url: res.target.value })} placeholder='Social link' sx={{ width: '80%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                        <TextField onChange={res => setNewSocialLinks({ ...newSocialLinks, priority: res.target.value })} placeholder='Link priority' sx={{ width: '35%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                    </Box>
                    <Box display={'flex'} gap={2}>
                        {sending ? <DoneIcon></DoneIcon> : <SendIcon sx={{ transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'orange', fontSize: '1.9rem' } }} onClick={send_link}></SendIcon>}
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    );
};

export default EditProfile;