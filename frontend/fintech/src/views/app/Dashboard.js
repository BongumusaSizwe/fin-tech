import React, { useState, useEffect } from 'react';
import {Container , Col, Row} from 'react-bootstrap'
import CustomerCard from '../../components/customer/CustomerCard';


const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('http://localhost:3000/login')
        }
        else {
            fetch('http://127.0.0.1:8000/api/users/auth/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setUserName(data.first_name);
                    setLoading(false);
                });
        }
    }, []);

    return (
        <>
        <Col md={4}></Col>
        <Col md={8}>
            <Row>
                <h3>Onboard Customers</h3>
            </Row>
            <Row>
            <CustomerCard />
            </Row>
        </Col>
        </>
    );
};

export default Dashboard;