import styles from '../styles/cta.module.scss';
import sharedStyles from '../styles/shared.module.scss';

const CTABlock = (props) => {
    const { callToActionBlock } = props.data
    return (
        <div className={sharedStyles.wrapper}>
            <div className={sharedStyles.container}>
                <div className={styles.callToActionSection}>
                    {callToActionBlock.map((item, i) => {
                        return (
                            <div key={i} className={styles.callToActionBlock}>
                                <h1 className={styles.sectionHeader}>
                                    {item.linkText}
                                </h1>
                                <a href={item.url}>
                                    <img src={item.ctaImage.asset.url} className={styles.ctaImage} />
                                </a>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default CTABlock