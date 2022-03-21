import React, { useState, useEffect, Fragment } from 'react';
import { Card, CardGroup, Container, Row, Col, ListGroupItem, ListGroup } from 'react-bootstrap'
import CustomerCard from '../../components/customer/CustomerCard';



const Dashboard = () => {

    // ***************************************************************************//
    //mock api
    const customerAPI = [
        {
            customer_photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            first_name: "Customer One",
            email: "customer1@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            first_name: "Customer Two",
            email: "customer2@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            first_name: "Customer Three",
            email: "customer3@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            first_name: "Customer Four",
            email: "customer4@gmail.com",
            status: "pending"
        },
        {
            customer_photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            first_name: "Customer Five",
            email: "customer5@gmail.com",
            status: "pending"
        },
        
    ]




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
        <main >
            <header>
                <h3>Onboard Customers</h3>
            </header>
            <Container fluid style={{
                position: 'relative',
                width: '875px',
                height: '480px',
                left: '130px',
                top: '10px',
                overflowX: 'hidden',
                background: '#C4C4C4'
            }}>

            <CustomerCard />

            </Container>
        </main>
    );
};

export default Dashboard;