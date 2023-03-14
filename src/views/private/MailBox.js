import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import MailBoxNavBar from '../../components/MailBox/MailBoxNavBar';
import MailBoxList from '../../components/MailBox/MailBoxList';
import { useDispatch } from 'react-redux';
import { getMailHandler } from '../../store/mail-thunk';

const MailBox = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        navigate('/home/compose');
    }

    useEffect(()=> {
        dispatch(getMailHandler());
    },[]);

    return (
        <>
            <MailBoxNavBar />
            <Container fluid={1}>
                <Row style={{ height: "93vh" }}>
                    <Col xs={2} className=" bg-info" variant="primary">
                        <ListGroup className="p-2" as="ul">
                            <Button variant='success' onClick={handleButtonClick} className='mb-2'>Compose </Button>
                            <ListGroup.Item className="m-1 bg- active" action>
                                inbox
                            </ListGroup.Item>
                            <ListGroup.Item className="m-1" action>
                                sendMail
                            </ListGroup.Item>
                            <ListGroup.Item className="m-1" action>
                                DraftBox
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col xs={10} className="">
                        <MailBoxList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MailBox