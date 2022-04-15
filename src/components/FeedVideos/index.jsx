import VideoPlayer from "../VideoPlayer";
import styles from './styles.module.css'
import React from 'react'

const VIDEOS = [
    {
        id: '1',
        auhor: 'victor',
        description: 'descripción de victor',
        likes: 9,
        shares: 12,
        comments: 3,
        songTitle: 'they trunna be subway surf',
        albumCover: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7b83aeec2aaea2f96f8bbde5d710242c.jpeg?x-expires=1650225600&x-signature=0rg%2FWpNN1WLDnaIeFiUXWUgRjTQ%3D',
        src: "https://v16-webapp.tiktok.com/340b63edf756e2c4a95f3807f1d59ead/625a29ca/video/tos/useast2a/tos-useast2a-ve-0068c004/5e5c23b638b14f6f8d49d8a000afd444/?a=1988&br=5776&bt=2888&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6HQqMyq8Zz7ZLwe2N0.oyl7Gb&l=202204152028050102231210790C5FDF45&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d0ZGg6Zjh5PDMzNzczM0ApZmZmZDo2NjxnNzw2aDczaGczNHM0cjQwXjVgLS1kMTZzcy81Xy1eYDVhXi1jLTZeMS86Yw%3D%3D&vl=&vr=",
    },
    {
        id: '2',

        auhor: 'gerard',
        description: 'descripción de gerard',
        likes: 19,
        shares: 122,
        comments: 23,
        songTitle: 'Arriba españa',
        albumCover: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7b83aeec2aaea2f96f8bbde5d710242c.jpeg?x-expires=1650225600&x-signature=0rg%2FWpNN1WLDnaIeFiUXWUgRjTQ%3D',
        src: "https://v16-webapp.tiktok.com/8df66a447f8be0b065b38b9512e7afeb/625a2b23/video/tos/useast2a/tos-useast2a-ve-0068c004/6318c4a213fd4e8e987d9efce79e7821/?a=1988&br=2492&bt=1246&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6HQqMyq8ZI5ZLwe2NPY0yl7Gb&l=202204152033500102231200421C601555&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2RldzQ6ZnM4PDMzNzczM0ApNGRoOzg3M2U1N2VpNDlmOGdibmxecjRfMzFgLS1kMTZzc19eMi0wMV5gL2AyXjYvYjE6Yw%3D%3D&vl=&vr=",
    },

]
export default function FeedVideos() {
    return (

        VIDEOS.map(video => {

            return <div key={video.id} className={styles.item}><VideoPlayer  {...video} /></div>
        })


    )
}