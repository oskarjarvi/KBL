import styles from '../styles/textWithIllustration.module.scss'


const TextWithIllustration = (props) => {
    const { hero } = props.data.image
    return (
        <div className={styles.textWithIllustrationSection}>
            <div className={styles.gridContainer}>
                <div className={styles.column}>
                    <div className={styles.textContainer}>
                        <p>{props.data.heading}</p>
                        <h1 style={{ color: '#57a2ae' }}>{props.data.tagline}</h1>
                    </div>
                    <img src={hero.url} className={styles.illustration} />
                </div>
                <div className={styles.column}>
                    <span>{props.data.excerpt}</span>
                </div>
            </div>
        </div>

    )
}
export default TextWithIllustration