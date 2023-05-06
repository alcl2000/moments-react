import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";
import { useSetCurrentUser, useCurrentUser } from '../contexts/currentUserContexts';
import Avatar from './Avatar';
import axios from 'axios';


const NavBar = () => {
    // NavBar toggle
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) =>{
            if(ref.current && !ref.current.contains(event.target)){
                setExpanded(false)
            }
        }
        document.addEventListener('mouseup', handleClickOutside)
        return () => {
            document.removeEventListener('mouseup', handleClickOutside)
        }
    }, [ref]);
    // user context
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    // Sign Out logic
    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };    

    // conditionals depending on user context
    const addPostIcon = (
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to='/posts/create'>
                    <i className='far fa-plus-square'></i> 
                    Add Post
            </NavLink>
    );
    const loggedInIcons = <>
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to='/posts/create'>
                    <i className='fas fa-stream'></i> 
                    Feed
            </NavLink>
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to='/posts/create'>
                    <i className='fas fa-heart'></i> 
                    Liked
            </NavLink>
            <NavLink 
                className={styles.NavLink} 
                to='/'
                onClick={handleSignOut}>
                    <i className='fas fa-sign-out-alt'></i> 
                    Sign Out
            </NavLink>
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar src={currentUser?.profile_id} text="Profile Image" height={40}/>
                Profile
            </NavLink>
                        </>
    const loggedOutIcons = <>
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to='/signin'>
                                <i className='fas fa-user-plus'></i> 
                                Sign In
                        </NavLink>
                        <NavLink 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to='/signup'>
                                <i className='fas fa-sign-in-alt'></i> 
                                Sign Up 
                        </NavLink>
                        </>
    // rendered
    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand='md' fixed='top'>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt='logo' height='45'/>
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle 
                    aria-controls='basic-navbar-nav' 
                    onClick={() => setExpanded(!expanded)} 
                    ref={ref}
                />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to='/'>
                            <i class="fas fa-home-lg-alt"></i> 
                            Home
                        </NavLink>
                        { currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;