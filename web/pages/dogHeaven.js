
import client from '../client'
import styles from '../styles/dogHeaven.module.scss'
// import Link from 'next/link'


const DogHeaven = (props) => {
    const { data = [] } = props
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.ourDogTitle}>Hundhimmelen</h1>
            {data.map((item, i) => (
                <div key={i} className={styles.dogTile}>
                    <div style={{ backgroundImage: `url(${item.image.asset.url})` }} className={styles.dogoImage}>
                    </div>
                    <h1 className={styles.dogoTitle}>
                        {item.title}
                    </h1>
                    <p>{item.dateOfBirth + ' ' + item.dateOfDeath}</p>
                </div>
            )
            )}
        </div>
    )
}
export async function getServerSideProps() {

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