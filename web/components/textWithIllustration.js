import styles from './component.module.css'


const TextWithIllustration = (props) => {
    return (
        <div className={styles.textWithIllustrationSection}>
            <p>{props.data.heading}</p>
            <h1 style={{ color: '#57a2ae' }}>{props.data.tagline}</h1>
        </div>

    )
}
export default TextWithIllustration