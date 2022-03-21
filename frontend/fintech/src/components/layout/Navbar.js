// import React, { useState, useEffect, Fragment } from 'react';
// import { Nav, Navbar, Container } from 'react-bootstrap';


// const MyNavbar = () => {
//     const [isAuth, setIsAuth] = useState(false);

//     useEffect(() => {
//         if (localStorage.getItem('token') !== null) {
//             setIsAuth(true);
//         }
//     }, []);

//     return (
//         <Navbar bg="dark" variant="dark">
//             <Container>
//                 <Navbar.Brand href="#">Onboarding</Navbar.Brand>
//                 <Nav className="me-auto">
//                     {isAuth === true ? (
//                         <Fragment>
//                             {' '}
//                             <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
//                             <Nav.Link href='/logout'>Logout</Nav.Link>
//                         </Fragment>
//                     ) : (
//                         <Fragment>
//                             <Nav.Link href='/login'>Login</Nav.Link>
//                             <Nav.Link href='/signup'>Registerlol</Nav.Link>
//                         </Fragment>
//                     )}
//                 </Nav>
//             </Container>
//         </Navbar>
//     );
// };

// export default MyNavbar;