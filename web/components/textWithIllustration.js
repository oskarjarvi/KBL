import styles from './component.module.css'


const TextWithIllustration = (props) => {
    console.log(props)
    const { hero } = props.data.image
    return (
        <div className={styles.textWithIllustrationSection}>

            <p>{props.data.heading}</p>
            <h1 style={{ color: '#57a2ae' }}>{props.data.tagline}</h1>
            <div className={styles.gridContainer}>
                <div className={styles.column}>
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