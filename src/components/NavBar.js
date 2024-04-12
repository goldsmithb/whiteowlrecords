import * as React from "react";
import * as styles from "../styles/navBar.module.css";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = ({ show, isMobile }) => {
	if (isMobile) {
		let i = 0;
		const container = {
			hidden: { opacity: 0},
			show: {
				opacity: 1,
				transition: {
					staggerChildren: 0.05
				}
			}
		};
		const listItem = {
			hidden: { opacity: 0, x: 200 },
			show: { opacity: 1, x: 0 }
		};
		return (
			<AnimatePresence mode-='wait'>
				{show && <motion.div variants={container} initial='hidden' animate='show' exit='hidden' key={i++}>
					<nav>
						<ul className={styles.navLinksMobile} >
							<motion.li variants={listItem} className={styles.navLinkItemMobile} key={i++}>
								<Link to='/' className={styles.navLinkText}>Home</Link>
							</motion.li>
							<motion.li variants={listItem} className={styles.navLinkItemMobile} key={i++}>
								<Link to='/events' className={styles.navLinkText}>Events</Link>
							</motion.li>
							<motion.li variants={listItem} className={styles.navLinkItemMobile} key={i++}>
								<Link to='/about' className={styles.navLinkText}>About</Link>
							</motion.li>
							<motion.li variants={listItem} className={styles.navLinkItemMobile} key={i++}>
								<a className={styles.navLinkText} href="https://whiteowlrecords.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a>
							</motion.li>
							<motion.li variants={listItem} className={styles.navLinkItemMobile} key={i++}>
								<a className={styles.navLinkText} href="https://soundcloud.com/white-owl-records" target="_blank" rel="noreferrer">Soundcloud</a>
							</motion.li>
							<motion.li variants={listItem} className={styles.navLinkItemMobile} key={i++}>
								<a className={styles.navLinkText} href="https://www.instagram.com/whiteowl.records/" target="_blank" rel="noreferrer">Instagram</a>
							</motion.li>
						</ul>
					</nav>
				</motion.div>}
			</AnimatePresence>
		);
	}


	const container = {
		hidden: { 
			opacity: 0, 
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			}
		}
	};
	const listItem = {
		hidden: { opacity: 0, },
		show: { opacity: 1, },
	};
	let i = 0;
	return (
		<AnimatePresence mode='wait'>
			{show && 
            <motion.div variants={container} initial='hidden' animate='show' exit='hidden'>
            	<nav>
            		<ul className={styles.navLinks} key={i++}>
            			<motion.li  variants={listItem} className={styles.navLinkItem} key={i++}>
            				<Link to='/' className={styles.navLinkText}>Home</Link>
            			</motion.li>
            			<motion.li  variants={listItem} className={styles.navLinkItem} key={i++}>
            				<Link to='/events' className={styles.navLinkText}>Events</Link>
            			</motion.li>
            			<motion.li  variants={listItem} className={styles.navLinkItem} key={i++}>
            				<Link to='/about' className={styles.navLinkText}>About</Link>
            			</motion.li>
            			<motion.li  variants={listItem} className={styles.navLinkItem} key={i++}>
            				<a className={styles.navLinkText} href="https://whiteowlrecords.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a>
            			</motion.li>
            			<motion.li  variants={listItem} className={styles.navLinkItem} key={i++}>
            				<a className={styles.navLinkText} href="https://soundcloud.com/white-owl-records" target="_blank" rel="noreferrer">Soundcloud</a>
            			</motion.li>
            			<motion.li  variants={listItem} className={styles.navLinkItem} key={i++}>
            				<a className={styles.navLinkText} href="https://www.instagram.com/whiteowl.records/" target="_blank" rel="noreferrer">Instagram</a>
            			</motion.li>
            		</ul>
            	</nav>
            </motion.div>}
		</AnimatePresence>
	);
};

export default NavBar;