import React, { useState, useEffect } from 'react';

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
            username: email,
            password: password
        };

        fetch('http://127.0.0.1:8000/authentication/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.access) {
                    localStorage.clear();
                    localStorage.setItem('token', data.access);
                    window.location.replace('https://localhost:3000/dashboard');
                } else {
                    setEmail('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <div>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Check your login details carefully.</h2>}
            {loading === false && (
                <form onSubmit={onSubmit}>
                    <label htmlFor='username'>Email: </label><br />
                    <input
                        name='username'
                        type='email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />{' '}
                    <br />
                    <label htmlFor='password'>Password:</label> <br />
                    <input
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />{' '}
                    <br />
                    <input type='submit' value='Login' />
                </form>
            )}
        </div>
    );
};

export default Login;

