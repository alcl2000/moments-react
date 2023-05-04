import React, {useContext} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from '../App';


const NavBar = () => {
    // user context
    const currentUser = useContext(CurrentUserContext)
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = <>
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to='/signin'>
                                <i class='fas fa-user-plus'></i> 
                                Sign In
                        </NavLink>
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to='/signup'>
                                <i class='fas fa-sign-in-alt'></i> 
                                Sign Up 
                        </NavLink>
                        </>
    // rendered
    return (
        <Navbar className={styles.NavBar} expand='md' fixed='top'>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt='logo' height='45'/>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to='/'><i class="fas fa-home-lg-alt"></i> Home</NavLink>
                        { currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;