import styles from '../styles/newsFeed.module.scss'

const NewsFeed = (props) => {
    const { newsArray } = props.data
    return (
        <div className={styles.newsSection} >
            <h1 className={styles.sectionHeader} style={{ color: 'white' }}>{props.data.heading}</h1>
            <div className={styles.newsFeed}>
                {newsArray.map((item, i) => (
                    <div key={i} className={styles.newsItem}>
                        <h1>{item.title}</h1>
                        <p>{item.postText}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default NewsFeed