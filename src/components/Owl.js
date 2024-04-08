import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/owlStyles.module.css'
import { AnimatePresence, motion } from 'framer-motion'

// const NavBar = ({ show, isMobile }) => {
//     let i = 0;
//     const container = {
//         hidden: { opacity: 0 },
//         show: {
//           opacity: 1,
//           transition: {
//             staggerChildren: 0.05
//           }
//         }
//       };
      
//       const listItem = {
//         hidden: { opacity: 0, x: 200 },
//         show: { opacity: 1, x: 0 }
//       };
const Owl = ({ showOwl, setShowOwl, isMobile }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const closeModal = () => {
        setShowOwl(false);
        // setTimeout(() => {
        //     sessionStorage.setItem('hasOwlBeenShown', true);
        //     setShowOwl(false);
        // }, 500); // Adjust delay as needed
        // setFadeOut(true);

    };

    return (
        <AnimatePresence>
            {/* <div className={`${styles.overlay} + ${fadeOut ? styles.fadeOut : ''}`}  */}
            { showOwl &&
            <motion.div    
                // key="modal"
                className={styles.overlay}  
                exit={{ opacity: 0 }} // Animation when component leaves DOM
                onClick={closeModal}>
            
                <StaticImage 
                    alt="Big Owl pop up"
                    src={"../images/BIGOWL.png"}
                    className={styles.centeredImage}
                />
                <div className={styles.textBoxOverlay}>
                    <div className={styles.textBox}>
                        ENTER
                    </div>
                </div>
            
            </motion.div>}
        </AnimatePresence>
    );
}

{/* 
                <StaticImage 
                    alt="Big Owl pop up"
                    src={"../images/BIGOWL.png"}
                    className={styles.centeredImage}
                />
                <div className={styles.textBoxOverlay}>
                    <div className={styles.textBox}>
                        ENTER
                    </div>
                </div> */}

            {/* </div>  */}
        
export default Owl;
