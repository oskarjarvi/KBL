import styles from './component.module.css'
import Link from 'next/link'

const CTA = (props) => {
    const { callToActionBlock } = props.data

    return (
        <div className={styles.callToActionSection}>
            {callToActionBlock.map((item, i) => {
                return (
                    <div key={i} className={styles.callToActionBlock}>
                        <h1 className={styles.sectionHeader} style={{ color: '#57a2ae' }}>
                            {item.linkText}
                        </h1>
                        <Link href={item.url}>
                            <img src={item.ctaImage.asset.url} className={styles.ctaImage} />
                        </Link>

                    </div>
                )
            })}
        </div>

    )
}
export default CTA