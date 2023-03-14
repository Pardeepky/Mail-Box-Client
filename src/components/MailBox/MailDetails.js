import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { getMailByIdHandler } from '../../store/mail-thunk';

const MailDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [mail, setMail] = useState({});

    const retrieveMailData = async () => {
        try {
            let emailId = JSON.parse(localStorage.getItem("mailId").replace(/[&@.]/g, ""));
            const res = await axios.get(`https://mail-box-client-50996-default-rtdb.firebaseio.com/${emailId}/${id}.json`)
            if (res.status) {
                setMail(res.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        try {
            dispatch(getMailByIdHandler(id))
            retrieveMailData()
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <>
            <Card className="mt-3">
                <Card.Header>
                    <h3>{mail.subject}</h3>
                </Card.Header>
                <Card.Body>
                    <p className="mb-5">
                        {mail.editor}
                    </p>
                </Card.Body>
                <Card.Footer>
                    <Button>Reply</Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default MailDetails