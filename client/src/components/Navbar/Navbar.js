import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const Navbar = ()=>{
    return(
        <div className={styles.majorContainer}>
            <div className={styles.options}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={styles.logoContainer}>
                <p>Simplify</p>
            </div>
            <div className={styles.options}>
                <FontAwesomeIcon icon={faInfoCircle} />
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