import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo_proyar.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';

const Header = () => {

    // const { user, logout } = useAuth();
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

  useEffect(() => {
  
    setExpanded(false);
  }, [location])
    

    return (
        <div className="head-bg">
            <Navbar collapseOnSelect  className="navbar"  expand="md" expanded={expanded}>
                <Container className="container-head">
                    <Navbar.Brand   href="/home"><img className='logo 'src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle   expand="md" aria-controls="responsive-navbar-nav"   onClick={() => setExpanded(!expanded)} />
                    <Navbar.Collapse   id="responsive-navbar-nav">
                        <Nav   className="ms-auto align-items-center">
                            <Link  to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            {/* <Link to="/dentist" className='list-item text-decoration-none'>Dentist</Link> */}
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            {/* {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;