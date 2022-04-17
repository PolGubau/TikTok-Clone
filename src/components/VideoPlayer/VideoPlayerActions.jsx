
import React from 'react'
import styles from './styles.module.css'
import { Heart } from '../icons/Heart'
import { Comment } from '../icons/Comment'
import { Share } from '../icons/Share'

export default function VidePlayerActions({likes=12,comments=12,shares=12, hearted=false}) {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart />
                <strong title='likes'>{likes} </strong>
            </div>
            <div className={styles.action}>
                <Comment />
                <strong title='comments'>{comments} </strong>

            </div>
            <div className={styles.action}>
                <Share />
                <strong title='shares'>{shares} </strong>

            </div>
        </aside>
    )
}