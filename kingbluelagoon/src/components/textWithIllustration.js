import styles from '../styles/textWithIllustration.module.scss'
import sharedStyles from '../styles/shared.module.scss';


const TextWithIllustration = (props) => {
    const { hero } = props.data.image

    return (
        <div className={sharedStyles.wrapper}>
            <div className={sharedStyles.container}>
                <div className={styles.textWithIllustrationSection}>
                    <div className={styles.gridContainer}>
                        <div className={styles.column}>
                            <div className={styles.textContainer}>
                                <p>{props.data.heading}</p>
                                <h1>{props.data.tagline}</h1>
                            </div>
                            <img src={hero.url} className={styles.illustration} />
                        </div>
                        <div className={styles.column}>
                            <span>{props.data.excerpt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TextWithIllustration