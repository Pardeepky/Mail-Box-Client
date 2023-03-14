import React, { useEffect } from 'react'
import MailBoxList from '../../components/MailBox/MailBoxList';
import { useDispatch } from 'react-redux';
import { getMailHandler } from '../../store/mail-thunk';

const MailBox = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMailHandler());
    }, []);

    return (
        <>
            <MailBoxList />
        </>
    )
}

export default MailBox