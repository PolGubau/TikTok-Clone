
import clsx from 'clsx';
import VideoPlayerActions from "../VideoPlayer/VideoPlayerActions.jsx";

import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
const SRC = "https://v16-webapp.tiktok.com/340b63edf756e2c4a95f3807f1d59ead/625a29ca/video/tos/useast2a/tos-useast2a-ve-0068c004/5e5c23b638b14f6f8d49d8a000afd444/?a=1988&br=5776&bt=2888&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6HQqMyq8Zz7ZLwe2N0.oyl7Gb&l=202204152028050102231210790C5FDF45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d0ZGg6Zjh5PDMzNzczM0ApZmZmZDo2NjxnNzw2aDczaGczNHM0cjQwXjVgLS1kMTZzcy81Xy1eYDVhXi1jLTZeMS86Yw%3D%3D&vl=&vr=";

export default function VideoPlayer() {
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
                src={SRC}
            />
            <i onClick={handlePlay}
                className={playerClassName}/>
                <VideoPlayerActions />
        </div>
    )
}