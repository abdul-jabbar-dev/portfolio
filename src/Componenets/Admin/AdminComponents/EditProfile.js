import { Box, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiFech from '../../../api/Fech';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
const EditProfile = () => {

    const [cvId, setCvId] = useState('')
    const [socialLinks, setsocialLinks] = useState([])
    const [newSocialLinks, setNewSocialLinks] = useState({})
    const [sending, setSending] = useState(false)
    const [cv_url, setCv_url] = useState({})
    const currencies = [
        'facebook', 'github', 'twitter', 'instagram', 'linkedin', 'other'
    ];
    const [getLinkName, setGetLinkName] = useState('facebook');

    const handleChange = (event) => {
        setGetLinkName(event.target.value);
    };
    useEffect(() => {
        apiFech.getProjectAll('http://api.abduljabbar.xyz/sociallinks', (res => {
            setsocialLinks(res.filter(cv => !cv.cv))
        }))
    }, [sending])
    useEffect(() => {
        apiFech.getProjectAll('http://api.abduljabbar.xyz/sociallinks', (res => {
            let getUrl = res.find(data => data.cv)
            console.log(res)
            setCvId(getUrl._id)
            setCv_url(prev => ({ _id: getUrl?._id, cv: getUrl?.cv, new_cv: prev?.new_cv }))
        }))
    }, [])

    const send_link = () => {
        if (getLinkName !== 'other') {
            newSocialLinks.name = getLinkName
        }
        if (newSocialLinks.name && newSocialLinks.url && newSocialLinks.priority) {

            apiFech.postProject('http://api.abduljabbar.xyz/sociallinks', { headers: { 'content-type': 'application/json', }, body: JSON.stringify(newSocialLinks) }, (res => console.log(res)), '', () => setSending(true))
        }
    }
    const deactive_link = (link) => {
        apiFech.updateProject(`http://api.abduljabbar.xyz/sociallinks/${link._id}`, { headers: { 'content-type': 'application/json', }, body: JSON.stringify({ update: "deactivate" }) }, (res => res.modifiedCount === 1 ? alert("Deactivate successfully") : alert("Deactivate unsuccessfully")))
    }
    const del_link = (link) => {
        const confirmDel = window.confirm("If you want to delete")
        confirmDel && apiFech.rmProject(`http://api.abduljabbar.xyz/sociallinks/${link._id}`, {}, (res => res.deletedCount === 1 ? alert("Delete successfully") : alert("Delete unsuccessfully")))
    }

    const update_link = (link) => {
        let updated_text = document.getElementById(link.name + "textField").value
        const updatedLink = {
            name: link.name,
            url: updated_text,
            update: 'update'
        }
        if (updatedLink.name && updatedLink.url) {

            apiFech.updateProject(`http://api.abduljabbar.xyz/sociallinks/${link._id}`, { headers: { 'content-type': 'application/json', }, body: JSON.stringify(updatedLink) }, (res => res.modifiedCount === 1 ? alert("Update successfully") : alert("Update unsuccessfully")))
        }
    }
    const send_cv_url = () => {
        if (cv_url.new_cv) {
            apiFech.updateProject(`http://api.abduljabbar.xyz/sociallinks/${cvId}`, { headers: { 'content-type': 'application/json', }, body: JSON.stringify(cv_url) }, (res => res.modifiedCount === 1 ? alert("Cv update successfully") : alert("cv update unsuccessfully")), '', () => setSending(true))
        }
    }
    sending && setTimeout(() => {
        setSending(false)
    }, 3000);
    return (
        <>
            <Container gap={3}>
                <Box flexDirection={{ xs: 'column', md: 'row', }} display={'flex'} gap={3}>

                    <Box sx={{ backgroundColor: '#302F4E', borderRadius: '10px', p: 4 }}>
                        {
                            socialLinks.length === 0 ? "Empty social links" : socialLinks.map((link, i) => <Box key={i} ><Box display={'flex '} justifyContent={'space-between'} flexDirection={{ xs: 'column', md: 'row', }} gap={5} >
                                <Typography variant='h6' color={"lightGray"}>{link.name}</Typography>
                                <Box display={'flex'} flexGrow={1} justifyContent={'space-between'}>
                                    <TextField id={link.name + "textField"} sx={{ boxShadow: '5px 10px 10px 0px rgb(0 0 0 / 4%)', width: '100%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} placeholder={link.url} variant='outlined' size='small'></TextField>
                                </Box>
                                <Box display={'flex'} marginRight={0} gap={2}>
                                    <DoneIcon sx={{ transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'orange', fontSize: '1.9rem' } }} onClick={e => update_link(link)}></DoneIcon>
                                    {
                                        link.priority !== "deactivate" && <DoDisturbIcon sx={{ transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'red', fontSize: '1.9rem' } }} onClick={e => deactive_link(link)}></DoDisturbIcon>
                                    }
                                </Box>

                            </Box>
                                {i !== socialLinks.length - 1 && <hr style={{ width: '80%', border: '0', borderTop: '.5px solid gray', margin: 'auto', opacity: '0.1', marginTop: '5px', marginBottom: '10px' }}></hr>}
                            </Box>)
                        }
                        <hr style={{ width: '90%', border: '0', borderTop: '.5px solid gray', margin: 'auto', marginTop: '20px', opacity: '0.3' }}></hr>
                        <Box display={'flex '} gap={2} mt={2} alignItems={'center'} >
                            {

                                getLinkName !== 'other' ? <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Link name "
                                    value={getLinkName}
                                    onChange={handleChange}
                                    sx={{ width: '80%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 }, label: { color: 'lightGray' } }} variant='outlined' size='small'
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    {currencies.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </TextField> : <TextField onChange={res => setNewSocialLinks({ ...newSocialLinks, name: res.target.value })} placeholder='Name' sx={{ width: '80%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                            }
                            <Box display={'flex'} gap={2}>

                                <TextField onChange={res => setNewSocialLinks({ ...newSocialLinks, url: res.target.value })} placeholder='Social link' sx={{ width: '80%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                                <TextField onChange={res => setNewSocialLinks({ ...newSocialLinks, priority: res.target.value })} placeholder='Priority' sx={{ width: '35%', input: { backgroundColor: '#353353', color: 'lightGray', fontWeight: 300 } }} variant='outlined' size='small'></TextField>
                            </Box>
                            <Box display={'flex'} gap={2}>
                                {sending ? <DoneIcon></DoneIcon> : <SendIcon sx={{ transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'orange', fontSize: '1.9rem' } }} onClick={send_link}></SendIcon>}
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ backgroundColor: '#302F4E', borderRadius: '10px', p: 4 }}>
                        {
                            socialLinks.length === 0 ? "Empty social links" : socialLinks.map((link, i) => <Box key={i} ><Box gap={5} >
                                <Typography variant='p' sx={{ display: 'inline' }} color={"lightGray"}>{link.name}</Typography>
                                <span style={{ display: 'flex', alignItems: 'center' }}><a target={'_blank'} rel="noreferrer" href={link.url}>{link.url}</a><small style={{ display: 'inline' }}> 	&#40; {link.priority}	&#41;</small><DeleteIcon fontSize='.5rem' sx={{ transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'red', fontSize: '1.3rem' } }} onClick={e => del_link(link)}></DeleteIcon></span><br></br>
                            </Box>
                            </Box>)
                        }

                    </Box>

                </Box>
                <br></br>
                <Box display={'flex'} sx={{ backgroundColor: '#302F4E', borderRadius: '10px', p: 4 }} justifyItems="center">

                    <TextField placeholder={cv_url.cv} onChange={e => setCv_url({ new_cv: e.target.value })} fullWidth={'100%'} id="standard-basic" label="Standard" variant="standard" />
                    <SendIcon onClick={send_cv_url} sx={{ cursor: 'pointer', transition: 'all .5s', ':hover': { borderRadius: '50px', cursor: 'pointer', color: 'orange', fontSize: '1.9rem' } }} />

                </Box>
            </Container>
        </>
    );
};

export default EditProfile;