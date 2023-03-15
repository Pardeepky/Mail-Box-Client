import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'

const SentMailDetails = () => {
    const { id } = useParams();
    const [mail, setMail] = useState({});

    const retrieveMailData = async () => {
        try {
            let emailId = JSON.parse(localStorage.getItem("mailId").replace(/[&@.]/g, ""));
            const res = await axios.get(`https://mail-box-client-50996-default-rtdb.firebaseio.com/sentMails/${emailId}/${id}.json`)
            if (res.status) {
                setMail(res.data);
            }
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        retrieveMailData()
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
            </Card>
        </>
    )
}

export default SentMailDetails