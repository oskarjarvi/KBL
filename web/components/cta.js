import styles from '../styles/cta.module.scss'
import { Button } from 'react-bootstrap'

const CTA = (props) => {
    const { linkText, url } = props.data

    return (
        <div className={styles.callToAction}>
            <p>{linkText}</p>
            <Button href={url}>Mail</Button>
        </div>
    )
}
export default CTA