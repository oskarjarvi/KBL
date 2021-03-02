
import client from '../client'
import styles from '../styles/dogHeaven.module.scss'
// import Link from 'next/link'


const DogHeaven = (props) => {
    const { data = [] } = props
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.ourDogTitle}>Hundhimmelen</h1>
            {data.map((item, i) => (
                // <Link href={{
                //     pathname: "/dogs/[slug]",
                //     query: { slug: item.slug.current }
                // }} as={`/dogs/${item.slug.current}`}
                //     key={i}>
                <div key={i} className={styles.dogTile}>
                    <div style={{ backgroundImage: `url(${item.image.asset.url})` }} className={styles.dogoImage}>
                    </div>
                    <h1 className={styles.dogoTitle}>
                        {item.title}
                    </h1>
                    <p>{item.dateOfBirth + ' ' + item.dateOfDeath}</p>

                </div>
                // </Link>
            )
            )}
        </div>
    )
}
export async function getStaticProps() {

    let data = await client.fetch(`
    *[_type == "dog" && dead] {
        image{asset->{url}},
        title,
        slug,
        dateOfBirth,
        dateOfDeath
    }
    `)
    return {
        props: { data }
    }
}

export default DogHeaven;