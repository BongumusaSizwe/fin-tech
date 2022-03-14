import React, {useState, useEffect } from "react";

const Signup =() => {
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null){
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
            password: password,
            confirm_password: confirm_password,
        };

        fetch('http://127.0.0.1:8000/authentication/register/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.key){
                localStorage.clear();
                localStorage.setItem('token', data.key);
                window.location.replace('http://localhost:3000/dashboard')
            } else {
                setFirstName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                localStorage.clear();
                setErrors(true);
            }
        });
    };

    return (
        <div>
            {loading === false && <h1>Signup</h1>}
            {errors === true && <h2>Signup unsuccessful</h2>}
            <form onSubmit={onSubmit}>
            <label htmlFor="text">Name: </label><br />
                <input 
                    name='first_name'
                    type='text'
                    value={first_name}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor="email">Email: </label> <br />
                <input 
                    name='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor="password">Password: </label><br />
                <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor="confirm_password">Confirm Password: </label><br />
                <input
                    name='confirm_password'
                    type='password'
                    value={confirm_password}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />{' '}
                <br />
                <input type='submit' value='Signup'/>
            </form>
        </div>
    );
};

export default Signup;