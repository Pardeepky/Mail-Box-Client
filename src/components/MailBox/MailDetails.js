import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { getMailByIdHandler } from '../../store/mail-thunk';
import useHttp from '../../hooks/api';

const MailDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [mail, setMail] = useState({});
    const { sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    dispatch(getMailByIdHandler(id))
    let emailId = JSON.parse(localStorage.getItem("mailId").replace(/[&@.]/g, ""));
    const transformTasks = (mailsObj) => {
      setMail(mailsObj);
    };

    fetchTasks(
      { url: `https://mail-box-client-50996-default-rtdb.firebaseio.com/${emailId}/${id}.json` },
      transformTasks
    );
  }, [fetchTasks]);

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