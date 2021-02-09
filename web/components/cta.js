import styles from './component.module.css'
import { Button } from 'react-bootstrap'

const CTA = (props) => {
    const { linkText, url } = props.data

    return (
        <div className={styles.callToAction}>
            <p style={{ marginRight: 30, marginBottom: 0 }}>{linkText}</p>
            <Button href={url}>Mail</Button>
        </div>
    )
}
export default CTA