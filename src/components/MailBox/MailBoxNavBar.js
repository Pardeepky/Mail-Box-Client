import React from "react";
// import "./InboxPage.css";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";

const MailBoxNavBar = () => {
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
                </Container>
            </Navbar>
        </>
    );
};
export default MailBoxNavBar;