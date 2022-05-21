import React from 'react';
import styles from "./navbar.module.css";
import logo from "../pic/logo.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                       
                    </ul>
                </div>
                <div >
                    <img className={styles.logo} src={logo} alt="logo"/>
                </div>
        

            </header>
            
        </div>
    );
};

export default Navbar;