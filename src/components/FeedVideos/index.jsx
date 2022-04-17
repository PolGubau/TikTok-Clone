import VideoPlayer from "../VideoPlayer";
import styles from './styles.module.css'
import React from 'react'

const VIDEOS = [
    {
        id: '1',
        author: '@victor_ciezar',
        description: 'descripción de victor',
        likes: 9,
        shares: 12,
        comments: 3,
        songTitle: 'they trunna be subway surf',
        albumImage: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7b83aeec2aaea2f96f8bbde5d710242c.jpeg?x-expires=1650225600&x-signature=0rg%2FWpNN1WLDnaIeFiUXWUgRjTQ%3D',
        src: "https://v16-webapp.tiktok.com/10c43e9d710ebf6cb7f58dfa27d89b34/625c414d/video/tos/useast2a/tos-useast2a-ve-0068c004/5e5c23b638b14f6f8d49d8a000afd444/?a=1988&br=5776&bt=2888&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6HQqMyq8ZDpcLwe2N7PELl7Gb&l=20220417103255010223078019126CBB06&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d0ZGg6Zjh5PDMzNzczM0ApZmZmZDo2NjxnNzw2aDczaGczNHM0cjQwXjVgLS1kMTZzcy81Xy1eYDVhXi1jLTZeMS86Yw%3D%3D&vl=&vr=",
    },
    {
        id: '2',
        author: '@gerard_m5',
        description: 'descripción de gerard',
        likes: 19,
        shares: 122,
        comments: 23,
        songTitle: 'Arriba españa',
        albumImage: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7b83aeec2aaea2f96f8bbde5d710242c.jpeg?x-expires=1650225600&x-signature=0rg%2FWpNN1WLDnaIeFiUXWUgRjTQ%3D',
        src: "https://v16-webapp.tiktok.com/403803c52216d3636b10da0221db10d0/625c4268/video/tos/useast2a/tos-useast2a-ve-0068c004/6318c4a213fd4e8e987d9efce79e7821/?a=1988&br=2492&bt=1246&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6HQqMyq8Z4YcLwe2Nwv9Ll7Gb&l=202204171037400102231210931D6D6872&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2RldzQ6ZnM4PDMzNzczM0ApNGRoOzg3M2U1N2VpNDlmOGdibmxecjRfMzFgLS1kMTZzc19eMi0wMV5gL2AyXjYvYjE6Yw%3D%3D&vl=&vr=",
    },

]
export default function FeedVideos() {
    return (

        VIDEOS.map(video => {

            return <div key={video.id} className={styles.item}><VideoPlayer  {...video} /></div>
        })


    )
}