import React, { useState, useEffect, Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import {
    ProSidebar,
    Menu,
    SidebarFooter,
    SubMenu,
    SidebarHeader,
    SidebarContent,
    MenuItem
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css'
import "./Header.css";

const MySidebar = () => {
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
        <Container fluid>
            {isAuth === true ? (
                <Fragment>
                    {' '}
                    <div id="header">
                        <ProSidebar>
                            <SidebarHeader>
                                <p>Welcome {userName}</p>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu>
                                    <MenuItem>Customer List</MenuItem>
                                    <MenuItem>Onboard Customer</MenuItem>
                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                <MenuItem>Logout</MenuItem>
                            </SidebarFooter>
                        </ProSidebar>
                    </div>
                </Fragment>
            ) : (
                <Fragment>

                    <Navbar.Brand href="#">Onboarding</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/login'>Logins</Nav.Link>
                        <Nav.Link href='/signup'>Register</Nav.Link>
                    </Nav>
                </Fragment>
            )}
        </Container>
    );

};

export default MySidebar;