import React from "react";
import { ListGroup } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Box.css'
import Axios from 'axios'
import { useState, useEffect } from 'react';

const CustomerCard = () => {
    // const { email } = useParams();
    const [customers, setCustomers] = useState([]);
    
    const fetchCustomers = async ()=> {
        const { data } = await Axios.get(
            "http://localhost:8000/api/customers/", {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            }
        );
        const customers = data;
        setCustomers(customers);

    };

    useEffect(() =>{
        fetchCustomers();
    }, []);

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: "50px" }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Header>{card.first_name}</Card.Header>
                    <ListGroup>
                        <ListGroup.Item>Email: {card.email}</ListGroup.Item>
                        <ListGroup.Item>Status: {card.status}</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                    <Link to={`../customerprofile/${card.email}`}>
                        <Button variant="primary" className="stretched-link" style={{
                            background: 'transparent',
                            border: 'none',
                            fontSize: '0'
                        }}></Button>
                    </Link>
                </Card.Body>
            </Card>

        );
    };
    return <div className="grid">{customers.map(renderCard)}</div>
};

export default CustomerCard;