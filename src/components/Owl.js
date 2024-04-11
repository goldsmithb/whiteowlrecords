/* ALTERNATIVE EXIT ANIMATION - IF FRAMER MOTION NOT WORKING: 
        // If framer motion animation is not working, we can still use
        // the old method of timed css transitions. Not ideal, but may be
        // needed in FireFox. In such a case, use following as outer div:
        // <div className={`${styles.overlay} + ${fadeOut ? styles.fadeOut : ''}`}
        // setTimeout(() => {
        //     sessionStorage.setItem('hasOwlBeenShown', true);
        //     setShowOwl(false);
        // }, 500); // Adjust delay as needed
        // setFadeOut(true);
*/

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/owlStyles.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Owl = ({ showOwl, setShowOwl, isMobile }) => {
	// const [fadeOut, setFadeOut] = useState(false); // for css fade out

	const closeModal = () => {
		sessionStorage.setItem("hasOwlBeenShown", true);
		setShowOwl(false);
	};

	if (isMobile) {
		return (
			<AnimatePresence>
				{ showOwl &&
                <motion.div    
                	key="modal"
                	className={`${styles.overlay} ${styles.mobile}`}  
                	exit={{ opacity: 0 }} // Animation when component leaves DOM
                	onClick={closeModal}>
                
                	<StaticImage 
                		alt="Big Owl pop up"
                		src={"../images/BIGOWL.png"}
                		className={`${styles.centeredImage} ${styles.mobile}`} 
                	/>
                	<div className={styles.textBox}>
                        ENTER
                	</div>  
                </motion.div>}
			</AnimatePresence>
		);
	}

	return (
		<AnimatePresence>
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
};

export default Owl;
