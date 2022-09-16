import React, { useEffect } from 'react';
import apiFech from '../../../api/Fech';

const MailsMaintain = () => {
    useEffect(() => {
        apiFech.getProjectAll('http://localhost:2001/notification', (res => console.log(res)))
    }, [])

    return (
        <div>

        </div>
    );
};

export default MailsMaintain;