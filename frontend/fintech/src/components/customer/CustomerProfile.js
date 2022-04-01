import { Card, ListGroup, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import mockAPI from '../../common/mockAPI';
import './Profile.css'
import Axios from 'axios'
import { useState, useEffect } from 'react';

const CustomerProfile = () => {
    const { email } = useParams();
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


    const profile = customers.filter(profile => profile.email === email);
    return (
            <Row>
                <div className='grid'>
                    {profile.map(card => (
                        <Card style={{ width: "4px" }} className="pbox">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body style={{padding: '2px'}}>
                                <Card.Header>{card.first_name}</Card.Header>
                                <ListGroup>
                                    <ListGroup.Item>Email: {card.email}</ListGroup.Item>
                                    <ListGroup.Item>Date of Birth: {card.dob}</ListGroup.Item>
                                    <ListGroup.Item>Country: {card.country}</ListGroup.Item>
                                    <ListGroup.Item>Status: {card.status}</ListGroup.Item>
                                </ListGroup>
                                <Button variant="success">Onboard</Button>{' '}
                                <Button variant="danger">Reject</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Row>
    );
}

export default CustomerProfile;