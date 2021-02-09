import styles from './component.module.css'

const NewsFeed = (props) => {
    const { newsArray } = props.data
    return (
        <div className={styles.newsSection} >
            <h1 className={styles.sectionHeader} style={{ color: 'white' }}>{props.data.heading}</h1>
            <div className={styles.newsFeed}>
                {newsArray.map((item, i) => (
                    <div key={i} className={styles.newsItem}>
                        <h1 style={{ color: '#57a2ae' }}>{item.title}</h1>
                        <p>{item.postText}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default NewsFeed