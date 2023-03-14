import React from "react";
import { ListGroup } from "react-bootstrap";

import { useSelector } from "react-redux";
const MailBoxList = () => {
    const mails = useSelector((state) => state.mail.mailList);
    const handleClick = (item) => {
        console.log(item);
    }
    return (
        <>
            <ListGroup as="ul" variant="primary">
                {mails.map((item) => {
                    return (
                        <ListGroup.Item key={item.id}
                            className="m-1 "
                            variant="primary"
                            action
                            onClick={() => handleClick(item)}>
                            {item.email}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </>
    );
};
export default MailBoxList;