
import React from 'react'
import styles from './styles.module.css'
import { Heart } from '../icons/Heart'
import { Comment } from '../icons/Comment'
import { Share } from '../icons/Share'

export default function VidePlayerActions({ likes = 12, comments = 12, shares = 12, hearted = false }) {
    
    const handleLike=()=>{
        window.alert('liked')
    }
    const handleComment=()=>{
        window.alert('commented')

    }
    const handleShare=()=>{
        window.alert('shared')
 
    }
    
    
    
    return (
        <aside className={styles.actions}>
            <button className={styles.action} onClick={handleLike}>
                <Heart />
                <span title='likes'>{likes} </span>
            </button>

            <button className={styles.action} onClick={handleComment}>

                <Comment />
                <span title='comments'>{comments} </span>
            </button>

            <button className={styles.action} onClick={handleShare}>

                <Share />
                <span title='shares'>{shares} </span>
            </button>

        </aside>
    )
}