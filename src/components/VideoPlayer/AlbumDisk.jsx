
import styles from './styles.module.css'


export default function AlbumDisk(props) {
    return(
        <div className={styles.albumImage}>
            <img src={props.albumImage} alt="Album Image" />
        </div>
    )
};
