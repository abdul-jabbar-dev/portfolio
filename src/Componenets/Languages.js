import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Languages = () => {
    return (
        <>
            <br />
            <Container style={{ padding: '20px 0' }}>
                <p align="left">
                    <Box width={'100%'} >
                        <Box className="div">
                            <a className="hover" href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a>
                            <a className='hover' href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>
                            <a className='hover' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a>
                            <a className='hover' href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a>
                            <a className='hover' href="https://svelte.dev" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="svelte" width="40" height="40" /></a>
                        </Box><br /><br />
                        <Box className="div">
                            <a className='hover' href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a>
                            <a className='hover' href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a>
                            <a className='hover' href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a>
                            <a className='hover' href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40" /> </a>
                            <a className='hover' href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40" /> </a>
                        </Box>
                    </Box>
                </p>
            </Container></>
    );
};

export default Languages;