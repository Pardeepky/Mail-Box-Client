import React from "react";
// import "./InboxPage.css";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { mailSliceAction } from "../../store/mailSlice";

const MailBoxNavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('mailId');
        dispatch(authActions.logout());
        dispatch(mailSliceAction.onLogout());
        navigate('/')
    }

    return (
        <>
            <Navbar bg="success" fluid={1}>
                <Container fluid>
                    <Nav>
                        <Nav.Link style={{ color: 'white' }}>Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex pl-5" style={{ width: "600px" }}>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-7"
                            aria-label="Search"
                        />
                        <Button variant="primary">Search</Button>
                    </Form>
                    <Nav>
                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
export default MailBoxNavBar;