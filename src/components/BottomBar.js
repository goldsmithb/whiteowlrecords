import * as React from 'react'
import * as styles from '../styles/BottomBar.module.css'

const BottomBar = () => {
    return (
        <div className={styles.bottomBar}>
            <div className={styles.bottomBarText}>
                contact:
                    <a className={styles.linkText} href="mailto:contact@whiteowlrecords.xyz"> contact@whiteowlrecords.xyz</a>
            </div>
        </div>
    )
}

export default BottomBar