import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MailBoxList = () => {
    const navigate = useNavigate();
    const mails = useSelector((state) => state.mail.mailList);

    const handleClick = (item) => {
        navigate(`/home/inbox/${item.id}`)
    }

    return (
        <>
            <ListGroup as="ul" variant="primary" className="m-3">
                {mails.map((item) => {
                    return (
                        <ListGroup.Item key={item.id}
                            className="m-1 d-flex justify-content-between align-items-center"
                            variant="primary"
                            action
                            onClick={() => handleClick(item)}>
                            <ul style={item.read === true ? { listStyleType: 'none', } : null}>
                                <li>{item.email}</li>
                            </ul>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </>
    );
};
export default MailBoxList;