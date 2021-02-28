
import client from '../client'
import styles from '../styles/dogs.module.scss'
import Link from 'next/link'

// index.js
const Planned = (props) => {
    const { data = [] } = props
    return (
        <div style={{ marginTop: 200 }}>

            <div className={styles.gridContainer}>
                <h1 className={styles.ourDogTitle}>Planerad kull</h1>

                {data.map((item, i) => (
                    <Link href={{
                        pathname: "/planned/[planned]",
                        query: { slug: item.slug.current }
                    }} as={`/planned/${item.slug.current}`}
                        key={i}>
                        <div key={i} className={styles.dogTile}>
                            <div className={styles.dogoImage}>
                                <h1 className={styles.dogoTitle}>
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    </Link>
                )
                )}
            </div>
        </div>
    )
}
export async function getStaticProps() {

    let data = await client.fetch(`
    *[_type == "plannedLitter"] {
        title,
        slug
    }
    `)
    return {
        props: { data }
    }
}

export default Planned;