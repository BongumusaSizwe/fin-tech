import React, { useState, useEffect } from 'react';
import { Button, Row, Form, Col, Container } from 'react-bootstrap';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('https://localhost:3000/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        fetch('http://127.0.0.1:8000/api/users/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    window.location.replace('http://localhost:3000/dashboard');
                } else {
                    setEmail('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <Container>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Check your login details carefully.</h2>}
            {loading === false && (
                <Form onSubmit={onSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name='email'
                                value={email}
                                required
                                onChange={e => setEmail(e.target.value)} />
                        </Col>
                    </Form.Group>{' '}

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>{' '}

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" value='Login'>Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            )}
        </Container>
    );
};

export default Login;