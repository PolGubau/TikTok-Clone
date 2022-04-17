
import React from 'react';
import styles from './styles.module.css'
import AlbumDisk from './AlbumDisk'


export default function VideoDescription(props){
    return (
        <footer className={styles.description}>
            <div>
                <strong>{props.author}</strong>
                <p>{props.description}</p>
            </div>
            <div>
            <AlbumDisk albumImage={props.albumImage}/>
            </div>

        </footer>
    )
}