import * as React from "react";
import * as styles from "../styles/BottomBar.module.css";

const BottomBar = ({ isMobile }) => {
	return (
		<div className={styles.bottomBar}>
			<div className={`${styles.bottomBarText} ${isMobile ? styles.mobile : ""}`}>
				<span>
                contact:
					<a className={styles.linkText} href="mailto:admin@whiteowlrecords.xyz"> admin@whiteowlrecords.xyz</a>
				</span>
			</div>
		</div>
	);
};

export default BottomBar;