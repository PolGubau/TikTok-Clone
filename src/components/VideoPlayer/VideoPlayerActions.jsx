
import styles from './styles.module.css'
import React from 'react'
import { Heart } from '../icons/Heart'

export default function VidePlayerActions() {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart />
            </div>
            <div className={styles.action}>
                <Heart />
            </div>
            <div className={styles.action}>
                <Heart />
            </div>
        </aside>
    )
}