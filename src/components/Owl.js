import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/owlStyles.module.css'

const Owl = ({ setShowOwl }) => {
    const closeModal = () => {
        setTimeout(() => {
            sessionStorage.setItem('hasOwlBeenShown', true);
            setShowOwl(false);
        }, 500); // Adjust delay as needed
        setFadeOut(true);

    };
    const hideOwl = () => {
        console.log("ON transition end")
    }
    const [fadeOut, setFadeOut] = useState(false);

    return (
        <div className={`${styles.overlay} + ${fadeOut ? styles.fadeOut : ''}`} 
            onClick={closeModal}>
            <StaticImage 
                alt="Big Owl pop up"
                src={"../images/BIGOWL.png"}
                className={styles.centeredImage}
            />
        </div>
        
    );
};

export default Owl;
