
import client from '../client'
import styles from '../styles/dogs.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// index.js
const Previous = (props) => {
    const { data = [] } = props
    const [filteredData, setFilteredData] = useState(null)
    useEffect(() => {
        if (data.length) {
            setFilteredData(data.filter(item => item.status === 'previous'))
        }
    }, [data])
    console.log(filteredData)
    return (
        <div>

            <div className={styles.gridContainer}>
                <h1 className={styles.ourDogTitle}>Tidigare kullar</h1>
                {filteredData && filteredData.map((item, i) => (
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
                )
                )}
            </div>
        </div>
    )
}
export async function getStaticProps() {

    let data = await client.fetch(`
    *[_type == "litter"] {
        image{asset->{url}},
        title,
        slug,
        status
    }
    `)
    return {
        props: { data }
    }
}

export default Previous;