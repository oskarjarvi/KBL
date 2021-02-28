import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import client from '../../client'
import styles from '../../styles/planned.module.scss'
import Gallery from '../../components/gallery'
import SwappableLitterContainer from '../../components/swappableLitterContainer'

const Previous = () => {
    const [data, setData] = useState(null)


    const router = useRouter()

    useEffect(() => {

        if (router.query.slug !== undefined) {
            let query = groq`*[_type == "litter" && slug.current == "${router.query.slug}"][0]{
        title, dateOfBirth, description, mum,
        imageOfMum{asset->{url}},
        descriptionOfMum, dad,
        imageOfDad{asset->{url}},
        descriptionOfDad,
        "imageGallery": imagegallery[].asset->url,
      }`
            client.fetch(query).then(res => {
                setData(res)
            })
        }
    }, [router.query.slug])


    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>
                <h1 style={{ textTransform: 'uppercase', marginBottom: 50, fontSize: '2rem' }}>Planer {data && data.dateOfBirth && data.dateOfBirth.slice(0, 4)}</h1>
                {data &&
                    <>
                        <div className={styles.hero}>
                            <div>
                                <img src={data.imageOfMum.asset.url} className={styles.headerImage} />
                                <h1 style={{ textTransform: 'uppercase' }}>
                                    {data.mum}
                                </h1>
                            </div>
                            <div>
                                <img src={data.imageOfDad.asset.url} className={styles.headerImage} />
                                <h1 style={{ textTransform: 'uppercase' }}>
                                    {data.dad}
                                </h1>
                            </div>
                        </div>
                        <p>{data.regnumber}</p>
                        <SwappableLitterContainer data={data} />
                        <Gallery data={data.imageGallery} />
                    </>
                }
            </div>
        </div>
    )
}


export default Previous