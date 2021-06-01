import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div className={styles.majorContainer}>
            <div className={styles.logoContainer}>
                <p>Simplify</p>
            </div>
            <div className={styles.menuContainer}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Summarizer">Summarizer</Link>
                    </li>
                    <li>
                        <Link to="/Spellchecker">Spellcheck</Link>
                    </li>
                    <li>
                        <Link to="/Aboutus">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;