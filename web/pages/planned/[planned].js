import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import client from '../../client'
import styles from '../../styles/planned.module.scss'
import Gallery from '../../components/gallery'
import SwappableContainer from '../../components/swappableContainer'
import sharedStyles from '../../styles/shared.module.scss';


const Planned = () => {
    const [data, setData] = useState(null)
    const router = useRouter()

    useEffect(() => {

        if (router.query.slug !== undefined) {
            let query = groq`*[_type == "litter" && slug.current == "${router.query.slug}"][0]{
        title, dateOfBirth, description, mum,
        imageOfMum{asset->{url}},
        mumLineage{asset->{url}},
        dadLineage{asset->{url}},
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
                <h1 className={styles.plannedTitle}>Planer {data && data.dateOfBirth && data.dateOfBirth.slice(0, 4)}</h1>
                {data &&
                    <>

                        <div className={styles.hero}>
                            <div className={styles.heroSection}>
                                <img src={data.imageOfMum.asset.url} className={styles.headerImage} />
                                <h1 className={styles.heroTitle}>
                                    {data.mum}
                                </h1>
                            </div>
                            <div className={styles.heroSection}>
                                <img src={data.imageOfDad.asset.url} className={styles.headerImage} />
                                <h1 className={styles.heroTitle}>
                                    {data.dad}
                                </h1>
                            </div>
                        </div>
                        <p>{data.regnumber}</p>
                        <SwappableContainer
                            columns={[
                                { name: 'Information', data: { content: data.description } },
                                { name: data.mum, type: 'imgNtext', data: { url: data.mumLineage.asset.url, content: data.descriptionOfMum } },
                                { name: data.dad, type: 'imgNtext', data: { url: data.dadLineage.asset.url, content: data.descriptionOfDad } }]}
                        />

                    </>
                }
            </div >
        </div >

    )
}


export default Planned