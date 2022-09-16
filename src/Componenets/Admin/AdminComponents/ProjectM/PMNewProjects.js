import { Alert, Box, Button, Fab, Portal, Snackbar, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import apiFech from '../../../../api/Fech';

const PMNewProjects = ({ container }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [open, setOpen] = useState(false);
    //site screenshot
    const [selectedScreenshort, setSelectedScreenshort] = useState(null);
    const [screenshortUrl, setScreenshortUrl] = useState(null);
    const handleClick = () => {
        setOpen(true);
    };
    //user data in input

    const [websiteInfo, setWebsiteInfo] = useState({
        siteThumbnail: {},
        siteScreenShort: {},
        websiteName: '',
        liveLink: '',
        clientLink: '',
        serverLink: '',
        discription: '',
        fecilites: '',
        technology: ''
    })

    const fileArray = [];
    useEffect(() => {
        if (selectedScreenshort) {
            let temp = []
            for (const key in selectedScreenshort) {
                if (Object.hasOwnProperty.call(selectedScreenshort, key)) {
                    const element = selectedScreenshort[key];
                    temp.push(element);
                }
            }
            setScreenshortUrl(temp);
        }
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedScreenshort, selectedImage]);


    const getValue = (e, value) => {
        let temp = { ...websiteInfo }
        temp[e.target.name] = value
        setWebsiteInfo(temp)

    }
    const postData = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append('siteThumbnail', websiteInfo.siteThumbnail, websiteInfo.siteThumbnail.name)
        formdata.append('websiteName', websiteInfo.websiteName)
        formdata.append('liveLink', websiteInfo.liveLink)
        formdata.append('clientLink', websiteInfo.clientLink)
        formdata.append('serverLink', websiteInfo.serverLink)
        formdata.append('discription', websiteInfo.discription)
        formdata.append('fecilites', websiteInfo.fecilites)
        formdata.append('technology', websiteInfo.technology)
        if (websiteInfo.siteScreenShort) {
            for (let key of websiteInfo.siteScreenShort) {
                let fileData = new Blob([websiteInfo.siteScreenShort[key]]);
                let reader = new FileReader();
                reader.readAsArrayBuffer(fileData);
                reader.onload = () => {
                    let arrayBuffer = reader.result
                    let bytes = new Uint8Array(arrayBuffer);
                    fileArray.push(bytes.buffer);
                }
            }
            for (let i = 0; i < websiteInfo.siteScreenShort.length; i++) {
                formdata.append("siteScreenShort" + [i], websiteInfo.siteScreenShort[i])
            };
        }
        apiFech.postProject('http://localhost:2001/projects', { body: formdata }, data => {
            handleClick();
            setImageUrl(null)
            setScreenshortUrl(null)
            document.querySelector('#mainForm').reset()
        }, (res) => console.log(res))
    }
 



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Portal container={container.current} >
            <Box
                method='post'
                onSubmit={e => postData(e)}
                mx={'auto'}
                maxWidth={'500px'}
                display={'flex'}
                id={'mainForm'}
                alignItems={'center'}
                encType={'multipart/form-data'}
                justifyContent={'center'}
                flexDirection={'column'}
                component="form"
                sx={{
                    '& .MuiTextField-root': { marginY: 1 },
                    'fieldset': { border: '1px solid white !important' }
                }}

                autoComplete="off"
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <Fab sx={imageUrl ? { height: '250px' } : ''} variant="extended" onClick={e => document.querySelector('#siteThumbnail').click()}>
                        {imageUrl ? <img height={'100%'} width={'80%'} src={imageUrl} alt="" /> : <> <AddPhotoAlternateIcon sx={{ mr: 1 }} />
                            Site thumbnail</>}
                    </Fab>
                    <input onChange={e => {
                        setSelectedImage(e.target.files[0])
                        getValue(e, e.target.files[0])
                    }} style={{ display: 'none' }} type="file" name="siteThumbnail" id="siteThumbnail" />

                    <Box>
                        <Fab size="small" color="secondary" aria-label="add" onClick={e => document.querySelector('#siteScreenShort').click()}>
                            <AddIcon />
                            <input multiple onChange={e => {
                                setSelectedScreenshort(e.target.files)
                                getValue(e, e.target.files)
                            }}

                                style={{ display: 'none' }} type="file" name="siteScreenShort" id="siteScreenShort" />
                        </Fab>
                        <Box>

                            <ul style={{ listStyle: 'none', display: 'flex', columnGap: '10px' }}>

                                {
                                    screenshortUrl?.map((value, index, arry) => {
                                        return <li key={index}>
                                            {value.name}
                                            <ClearIcon fontSize='small' onClick={e => setScreenshortUrl(arry?.filter((value, i) => index !== i))}></ClearIcon>
                                        </li>
                                    })
                                }

                            </ul>
                        </Box>
                    </Box>
                </Box>
                <br />
                <TextField
                    sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }}
                    size='small'
                    color='primary'
                    style={{ width: '100%' }}
                    required
                    label="Website name"
                    name="websiteName"
                    onChange={(e) => getValue(e, e.target.value)}


                />
                <Box display={'flex'} width={'100%'} columnGap={'10px'} >
                    <TextField
                        sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }} color='primary'
                        style={{ width: '33%' }}
                        required
                        label="Live Site link"
                        name="liveLink"
                        onChange={(e) => getValue(e, e.target.value)}

                    />
                    <TextField
                        sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }} color='primary'
                        style={{ width: '33%' }}
                        required
                        label="Client Site link"
                        name="clientLink"
                        onChange={(e) => getValue(e, e.target.value)}

                    />
                    <TextField
                        sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }} color='primary'
                        style={{ width: '33%' }}
                        label="Server Site link"
                        name="serverLink"
                        onChange={(e) => getValue(e, e.target.value)}

                    />
                </Box>
                <TextField
                    sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }} color='primary'
                    style={{ width: '100%' }}
                    required
                    label="Discription"
                    name="discription"
                    onChange={(e) => getValue(e, e.target.value)}

                />
                <TextField
                    sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }} color='primary'
                    style={{ width: '100%' }}
                    required
                    label="Fecilites"
                    name='fecilites'
                    onChange={(e) => getValue(e, e.target.value)}

                />
                <TextField
                    sx={{ input: { color: 'white', fontWeight: "400" }, label: { color: '#4E8AAE', fontWeight: "400" } }} color='primary'

                    style={{ width: '100%' }}
                    required
                    label="Technology"
                    name="technology"
                    onChange={(e) => getValue(e, e.target.value)}

                />
                <Button sx={{ letterSpacing: '3px', color: 'white', backgroundColor: '#7B1FA2', '&:hover': { color:'#ED6C2A'} }} style={{ padding: '8px 20px', borderRadius: '5px' }} type="submit" value="Sumbit" >Sumbit</Button>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Create project successfully!
                    </Alert>
                </Snackbar>

            </Box>
        </Portal>
    );
};

export default PMNewProjects;