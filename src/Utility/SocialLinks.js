import React, { useEffect, useState } from 'react';
import apiFech from '../api/Fech';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

const SocialLinks = () => {
    const [links, setLinks] = useState({})
    useEffect(() => {
        apiFech.getProjectAll('https://determined-cyan-vest.cyclic.app/sociallinks', async (res) => {

            await setLinks(res.filter(perLinks => perLinks.priority === 'active'))
        })
    }, []);



    const socialIcon = [{
        icon: <FacebookOutlinedIcon htmlColor='white' />,
        name: 'facebook',
    }, {
        icon: <GitHubIcon htmlColor='white' />,
        name: 'GitHub',
    }, {
        icon: <LinkedInIcon htmlColor='white' />,
        name: 'Linkedin',
    }, {
        icon: <TwitterIcon htmlColor='white' />,
        name: 'Twitter',
    }, {
        icon: <InstagramIcon htmlColor='white' />,
        name: 'Instagram',
    },
    ]
    return (
        <div> {links.length ? socialIcon?.map((ico, i) => <IconButton key={i} target={'_blank'} href={links?.find(re => re?.name?.toUpperCase() === ico?.name.toUpperCase())?.url} aria-label="fingerprint">
            {ico.icon}
        </IconButton>) : ''}</div>
    )
}

export default SocialLinks