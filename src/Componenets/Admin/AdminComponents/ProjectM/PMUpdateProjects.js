import { Box, Grid, IconButton, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import apiFech from '../../../../api/Fech';

const ModalEdit = ({ modalOpen, handleClose, projects, removeProject }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'max-container',
        bgcolor: '#302F4E',
        boxShadow: 24,
        py: 12,
        px: 4,
        borderRadius: '5px',
        color: 'white !important',
        'input': { color: 'white !important', },
        'label': { color: '#4E8AAE !important', },
    };
    return (<>
        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <Typography variant="h6" textAlign={'center'} gutterBottom>
                    {projects.websiteName}
                </Typography>
                <Box component="form" /* onSubmit={handleSubmit} */ noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} mt={2} display={'flex'} justifyContent={'space-around'}>
                            {
                                Object.getOwnPropertyNames(projects).filter((e) => e.includes('siteScreenShort')).map(image => <img style={{ borderRadius: '5px' }} src={projects[image]} width={'100'} alt={projects.websiteName} />)
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="websiteName"
                                name="websiteName"
                                label="websiteName"
                                fullWidth
                                variant="standard"
                                defaultValue={projects.websiteName}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="liveLink"
                                name="liveLink"
                                label="Live Link"
                                fullWidth
                                variant="standard"
                                defaultValue={projects.liveLink}

                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="clientLink"
                                name="clientLink"
                                label="Client Link"
                                fullWidth
                                variant="standard"
                                defaultValue={projects.clientLink}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="serverLink"
                                name="serverLink"
                                label="Server Link"
                                fullWidth
                                type="url"
                                variant="standard"
                                defaultValue={projects.serverLink}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="discription"
                                name="discription"
                                label="Discription"
                                fullWidth
                                variant="standard"
                                defaultValue={projects.discription}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="technology"
                                name="technology"
                                label="Technology"
                                fullWidth
                                variant="standard"
                                defaultValue={projects.technology}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="fecilites"
                                name="fecilites"
                                label="Fecilites"
                                fullWidth
                                variant="standard"
                                defaultValue={projects.fecilites}
                            />
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent={'space-between'}>
                            <IconButton onClick={removeProject} size='large' aria-label="ClearIcon" color="error">
                                <ClearIcon />
                            </IconButton>
                            <IconButton size='large' type=" submit" aria-label="SendIcon" color="primary">
                                <SendIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Modal>
    </>)
}
const PMUpdateProjects = ({ projects, response, }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const removeProject = () => {
        apiFech.rmProject('http://localhost:2001/projects/' + projects._id, null, res => {
            if (res.deletedCount) {
                response('delete')
                handleClose()
            }
        })
    }
    return (
        <>
            <p onClick={handleOpen}> {projects.websiteName}</p>
            {
                modalOpen ? <div>
                    <p onClick={handleOpen}> {projects.websiteName}</p>
                    {modalOpen ? <ModalEdit modalOpen={modalOpen} handleClose={handleClose} projects={projects} removeProject={removeProject} ></ModalEdit> : 'asdf'}
                </div> : ''
            }

        </>
    );
};

export default PMUpdateProjects;