
import client from '../client'
import styles from '../styles/dogs.module.scss'


import Link from 'next/link'

// index.js
const Dogs = (props) => {
    const { data = [] } = props
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.ourDogTitle}>Foderhundar</h1>
            {data.map((item, i) => (
                <Link href={{
                    pathname: "/dogs/[slug]",
                    query: { slug: item.slug.current }
                }} as={`/dogs/${item.slug.current}`}
                    key={i}>
                    <div key={i} className={styles.dogTile}>
                        <div style={{ backgroundImage: `url(${item.image.asset.url})` }} className={styles.dogoImage}>
                            <h1 className={styles.dogoTitle}>
                                {item.title}
                            </h1>
                        </div>
                    </div>
                </Link>
            ))

            }
        </div>
    )
}
export async function getStaticProps() {

    let data = await client.fetch(`
    *[_type == "dog" && foder] {
        image{asset->{url}},
        title,
        slug
    }
    `)
    return {
        props: { data }
    }
}

export default Dogs;