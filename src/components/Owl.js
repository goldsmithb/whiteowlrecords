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

import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/OwlStyles.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { isChrome } from "react-device-detect";

const Owl = ({ showOwl, setShowOwl, isMobile }) => {
	const [fadeOut, setFadeOut] = useState(false); // for css fade out

	const closeModal = () => {
		if (isChrome) {
			sessionStorage.setItem("hasOwlBeenShown", true);
			setShowOwl(false);
		} else {
			setTimeout(() => {
				sessionStorage.setItem("hasOwlBeenShown", true);
				setShowOwl(false);
			}, 500); // Adjust delay as needed
			setFadeOut(true);
		}
	};

	// Animate Presence causes a flicker in Safari and firefox, so use a regular
	// css transition class to handle fade on exit for those browsers.
	// Unclear whether bug is part of framer motion or not. 
	if (!isChrome) {
		if (isMobile) {
			return (
				<div className={`${styles.overlay} ${styles.mobile} ${fadeOut ? styles.fadeOut : ""}`}
					key="modal"
					onClick={closeModal}>
					
					<StaticImage 
						alt="Big Owl pop up"
						src={"../images/BIGOWL.png"}
						className={`${styles.centeredImage} ${styles.mobile}`} 
					/>
					<div className={styles.textBox}>
							ENTER
					</div>  
				</div>
			);
		}
		return (
			<div className={`${styles.overlay}  ${fadeOut ? styles.fadeOut : ""}`}
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
			</div>
		);
	}
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
