import styles from '../styles/cta.module.scss'


const CTABlock = (props) => {
    const { callToActionBlock } = props.data

    return (
        <div className={styles.callToActionSection}>
            {callToActionBlock.map((item, i) => {
                return (
                    <div key={i} className={styles.callToActionBlock}>
                        <h1 className={styles.sectionHeader} style={{ color: '#57a2ae' }}>
                            {item.linkText}
                        </h1>
                        <a href={item.url}>
                            <img src={item.ctaImage.asset.url} className={styles.ctaImage} />
                        </a>

                    </div>
                )
            })}
        </div>
    )
}
export default CTABlock