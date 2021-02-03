import styles from './component.module.css'

const Hero = (props) => {
    const { hero } = props.data.image
    const { image } = props.data.logo
    return (

        <div className={styles.heroImage} style={{ backgroundImage: `url(${hero.url})` }}>
            <div className={styles.heroImageText}>
                <p>{props.data.heading}</p>
                <img src={image.url} className={styles.heroLogo} />
            </div>
        </div>
    )
}
export default Hero