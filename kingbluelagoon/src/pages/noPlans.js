import CTA from "../components/cta"
import styles from '../styles/noPlans.module.scss'

const NoPlans = () => {
    return (
        <div className={styles.container}>
            <h1>
                Planer
            </h1>
            <p>Det finns inga planerade kullar i nuläget.</p>
            <CTA data={{ linkText: 'Har du frågor eller vill veta mer om planerade valpkullar, tveka inte att kontakta oss', url: 'mailto:bluelagoon@live.se' }} />
        </div>
    )
}
export default NoPlans