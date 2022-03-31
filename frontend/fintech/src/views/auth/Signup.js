import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Signup = () => {
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error_message, setErrorMessage] = useState('Signup Unsuccessful')
    
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            first_name: first_name,
            email: email,
            password1: password1,
            password2: password2,
        };

        fetch('http://127.0.0.1:8000/api/users/auth/register/', {
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
                    window.location.replace('http://localhost:3000/dashboard')
                } else {
                    setFirstName('');
                    setEmail('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setErrors(true);
                    if(data.email){
                        setErrorMessage("A user is already registered with this e-mail address.")
                    }
                }
            });
    };

    return (
        <Container>
            {loading === false && <h1>Signup</h1>}
            {errors === true && <h3>{error_message}</h3>}
            <Form onSubmit={onSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            name='first_name'
                            type='text'
                            value={first_name}
                            placeholder = 'Name'
                            onChange={e => setFirstName(e.target.value)}
                            required />
                    </Col>
                </Form.Group>{' '}

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
                            name='password1'
                            value={password1}
                            required
                            onChange={e => setPassword1(e.target.value)}
                        />
                    </Col>
                </Form.Group>{' '}

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Confirm Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name='password2'
                            value={password2}
                            required
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </Col>
                </Form.Group>{' '}

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" value='Login'>Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Signup;