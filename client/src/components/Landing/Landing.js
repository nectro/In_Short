import React from 'react'
import styles from './Landing.module.css'
import Pic from '../../assets/img1.svg'
import { Link } from 'react-router-dom'

const Landing = ()=>{
    return(
        <div className={styles.majorContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.heading}>
                    <h1>ONLINE<br/> SUMMARIZER<br/> AND SPELLCHECKER</h1>
                </div>
                <div className={styles.description}>
                    <p>Tired of going through the study materials marking important points or the same when you are continously going through an article checking for spelling mistake before posting it online. well, here we have a solution to get out of that hustle</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/Summarizer" className={styles.btn1}>Use Summarizer</Link>
                    <Link to="/Spellchecker" className={styles.btn2}>Use Spell Check</Link>
                </div>

            </div>
            <div className={styles.photoContainer}>
                <img src={Pic} />
            </div>
        </div>
    )
}

export default Landing;