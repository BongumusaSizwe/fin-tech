import React, { useState, useEffect } from 'react';
import {
    ProSidebar,
    Menu,
    SidebarFooter,
    SidebarHeader,
    SidebarContent,
    MenuItem
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom';
import "./Header.css";

const MySidebar = () => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
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
        else {
            window.location.replace('http://localhost:3000/login')
        }
    }, []);
    return (

        <ProSidebar id="header">
            <SidebarHeader>
                <p>Welcome {userName}</p>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem><Link to="/dashboard" />Customer List</MenuItem>
                    <MenuItem><Link to="/boardingform" />Onboard Customer</MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu>
                    <MenuItem><Link to="/logout" />Logout</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default MySidebar;