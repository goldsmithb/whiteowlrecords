import * as React from 'react'
import * as styles from '../styles/BottomBar.module.css'

const BottomBar = () => {
    return (
        <div className={styles.bottomBar}>
            White owl records is a record label based in Brooklyn, NY. Contact us at:
                <a className={styles.linkText} href="mailto:contact@whiteowlrecords.xyz"> contact@whiteowlrecords.xyz</a>
        </div>
    )
}

export default BottomBar