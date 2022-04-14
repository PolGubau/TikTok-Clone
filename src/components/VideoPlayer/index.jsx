
import React from 'react'
import styles from './styles.module.css'
const SRC = "https://v16-webapp.tiktok.com/447b0d0d07fc2a7ce36728048a2a10a8/6258ce00/video/tos/useast2a/tos-useast2a-ve-0068c004/5e5c23b638b14f6f8d49d8a000afd444/?a=1988&br=5776&bt=2888&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6HQqMyq8ZU_LLwe2NbB3yl7Gb&l=202204141944110102230871610D5B23BE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d0ZGg6Zjh5PDMzNzczM0ApZmZmZDo2NjxnNzw2aDczaGczNHM0cjQwXjVgLS1kMTZzcy81Xy1eYDVhXi1jLTZeMS86Yw%3D%3D&vl=&vr=";

export default function VideoPlayer() {
    return (
        <div>
        <video 
        autoPlay
        muted
        className={styles.video} 
        src={SRC} 
        controls={false} 
        />
        </div>
    )
}