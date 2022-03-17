import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <nav>
            <h1>Fin-Tech</h1>
            <ul>
                {isAuth ===false ? (
                    <Fragment>
                        {' '}
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/logout'>Logout</Link>
                        </li>
                    </Fragment>
                ) : (
                    <Fragment>
                        {' '}
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Register</Link>
                        </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;