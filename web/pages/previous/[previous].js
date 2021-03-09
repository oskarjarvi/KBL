import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import client from '../../client'
import styles from '../../styles/previous.module.scss'
import Gallery from '../../components/gallery'
import SwappableContainer from '../../components/swappableContainer'
import sharedStyles from '../../styles/shared.module.scss';

const Previous = () => {
    const [data, setData] = useState(null)

    const router = useRouter()

    useEffect(() => {

        if (router.query.slug !== undefined) {
            let query = groq`*[_type == "litter" && slug.current == "${router.query.slug}"][0]{
        title, dateOfBirth, description, mum,inbredPercentage,
        image{asset->{url}},
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
            <div style={{ backgroundImage: `url(${data && data.image.asset.url})` }} className={styles.heroimg}></div>
            <div className={sharedStyles.wrapper}>
                <div className={sharedStyles.container}>
                    <div className={styles.container}>
                        {data &&
                            <>
                                <div className={styles.heroTitles}>
                                    <h1>{data.title}</h1>
                                    <h1>{data.dateOfBirth}</h1>
                                    <h1>{data.inbredPercentage}</h1>
                                </div>
                                <div className={styles.descriptionContainer}>
                                    {data.description}
                                </div>
                                <div className={styles.parentContainer}>
                                    <div>
                                        <img src={data.imageOfMum.asset.url} className={styles.parentImage} />
                                        <h1 className={styles.parentTitle}>
                                            {data.mum}
                                        </h1>
                                    </div>
                                    <div>
                                        <img src={data.imageOfDad.asset.url} className={styles.parentImage} />
                                        <h1 className={styles.parentTitle}>
                                            {data.dad}
                                        </h1>
                                    </div>
                                </div>
                                <p>{data.regnumber}</p>
                                <SwappableContainer
                                    columns={[
                                        { name: data.mum, type: 'imgNtext', data: { url: data.mumLineage.asset.url, content: data.descriptionOfMum } },
                                        { name: data.dad, type: 'imgNtext', data: { url: data.dadLineage.asset.url, content: data.descriptionOfDad } }]}
                                />
                                <Gallery data={data.imageGallery} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Previous