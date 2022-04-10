import { Button, Box, } from '@mui/material';
import React, { useRef, useState } from 'react';
import PMAllProjects from './ProjectM/PMAllProjects';

import PMNewProjects from './ProjectM/PMNewProjects';
const ProjectsMaintain = () => {
    const [createForm, setCreateForm] = useState(false);
    const [allProjects, setAllProjects] = useState(false);
    const container = useRef(null);
    const showDetais = (fType) => {
        if (fType === 'create') {
            if (allProjects) {
                setAllProjects(!allProjects)
            }
            setCreateForm(!createForm);
        } else if (fType === 'table') {
            if (createForm) {
                setCreateForm(!createForm);
            }
            setAllProjects(!allProjects)
        }
    };

    return (
        <div>
            <Button color='success' onClick={() => showDetais('create')}>{createForm ? 'Close project' : 'Create project'}</Button><br />
            <Button color='success' onClick={() => showDetais('table')}>{allProjects ? 'Hide All project' : 'Show All project'}</Button><br />

            <Box sx={{ p: 1, my: 1, }}>

                {createForm ? (
                    <PMNewProjects container={container}></PMNewProjects>
                ) : null}
                <Box sx={{ p: 1, my: 1, }} ref={container} />
                {allProjects ? (
                    <PMAllProjects container={container}></PMAllProjects>
                ) : null}
            </Box>
        </div >
    );
};

export default ProjectsMaintain;