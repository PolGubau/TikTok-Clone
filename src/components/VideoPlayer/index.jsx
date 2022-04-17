
import clsx from 'clsx';
import VideoPlayerActions from "../VideoPlayer/VideoPlayerActions.jsx";

import React, { useRef, useState } from 'react'
import styles from './styles.module.css'


export default function VideoPlayer(props) {
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () => {
        const { current: videEl } = video
        playing
            ? videEl.pause()
            : videEl.play()

        setPlaying(!playing)
    }

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing
    })


    return (
        <div className={styles.wrapper}>
            <video

                className={styles.video}
                controls={false}
                loop
                onClick={handlePlay}
                ref={video}
                src={props.src}
            />
            <i onClick={handlePlay}
                className={playerClassName}/>
                <VideoPlayerActions />
        </div>
    )
}