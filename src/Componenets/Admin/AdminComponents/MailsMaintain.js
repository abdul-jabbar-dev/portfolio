import React, { useEffect } from 'react';
import apiFech from '../../../api/Fech';

const MailsMaintain = () => {
    useEffect(() => {
        apiFech.getProjectAll('https://determined-cyan-vest.cyclic.app/notification', (res => console.log(res)))
    }, [])

    return (
        <div>

        </div>
    );
};

export default MailsMaintain;