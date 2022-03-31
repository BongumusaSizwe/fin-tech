import React, { useState, useEffect, Fragment } from 'react';
import { Nav, Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import Dashboard from '../../views/app/Dashboard';
import MySidebar from './MySidebar';


const Layout = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
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
        <div>
            {isAuth === true ? (
                <Fragment>
                    {' '}
                    <Container fluid>
                        <Row>
                            <Col md={4} >
                                <MySidebar />
                            </Col>
                            <Col md={8}>
                                <Dashboard />
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            ) : (
                <Fragment>
                    <Container>
                        <Card>
                            <Navbar.Brand href="#">Onboarding</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href='/login'>Login</Nav.Link>
                                <Nav.Link href='/signup'>Register</Nav.Link>
                            </Nav>
                        </Card>
                    </Container>
                </Fragment>
            )
            }
        </div >
    );

};

export default Layout;