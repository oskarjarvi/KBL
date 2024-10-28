import styles from '../styles/hero.module.scss'
const Hero = ({ data, key }) => {

    const {asset} = data.image;
    const { asset: logoAsset } = data.logo

 
    const heroUrl = asset.url
    const heroLogo = logoAsset.url

    return (
        <div className={styles.heroImage} style={{backgroundImage: `url(${heroUrl})`
        }} key={key}>
            <div className={styles.heroImageText}>
                <p>{data.heading}</p>
                <img src={heroLogo} className={styles.heroLogo} />
            </div>
        </div>
    )
}
export default Hero