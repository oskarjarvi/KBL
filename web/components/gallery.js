import styles from '../styles/gallery.module.scss'
const Gallery = ({ data }) => {
    return (
        <div className={styles.imageGridContainer}>
            {data && data.map((item, i) => (
                <div key={i} style={{ backgroundImage: `url(${item})` }} className={styles.galleryImage}>

                </div>
            ))}
        </div>
    )
}
export default Gallery