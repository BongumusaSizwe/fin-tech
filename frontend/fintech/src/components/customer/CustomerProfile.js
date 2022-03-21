import React from "react";
import { ListGroup } from "react-bootstrap";
// import { useState } from "react";
import { Card } from "react-bootstrap";
import './Box.css'
const Customerprofile = () => {
    //mock api
    const customerAPI = [
        {
            customer_photo: "http://localhost:8000/uploads/customer1_dXRj6V0.png",
            first_name: "Customer One",
            email: "customer1@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "http://localhost:8000/uploads/customer1_dXRj6V0.png",
            first_name: "Customer Two",
            email: "customer2@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "http://localhost:8000/uploads/customer1_dXRj6V0.png",
            first_name: "Customer Three",
            email: "customer3@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "http://localhost:8000/uploads/customer1_dXRj6V0.png",
            first_name: "Customer Four",
            email: "customer4@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "http://localhost:8000/uploads/customer1_dXRj6V0.png",
            first_name: "Customer Five",
            email: "customer5@gmail.com",
            status: "pending"
        },

    ]

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: "10px" }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.customer_photo} />
                <Card.Body>
                    <Card.Header>{card.first_name}</Card.Header>
                    <ListGroup>
                        <ListGroup.Item>Email: {card.email}</ListGroup.Item>
                        <ListGroup.Item>Status: {card.status}</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                    {/* <a href= "#" class="stretched-link"></a> */}
                    <button className="stretched-link" style={{ 
                        background: 'transparent',
                        border: 'none',
                        fontSize: '0'
                        }}></button>
                </Card.Body>
            </Card>
        );
    };
    return <div className="grid">{customerAPI.map(renderCard)}</div>
};

export default Customerprofile;