import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { client } from '../../sanity/lib/client'
import SwappableContainer from '../../components/swappableContainer'
import styles from '../../styles/puppies.module.scss'
import Gallery from '../../components/gallery'


const Puppies = () => {
    const [data, setData] = useState(null)
    const router = useRouter()

    useEffect(() => {

        if (router.query.slug !== undefined) {
            let query = groq`*[_type == "litter" && slug.current == "${router.query.slug}"][0]{
        title, dateOfBirth, description, mum,
        inbredPercentage,
        imageOfMum{asset->{url}},
        image{asset->{url}},
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


    return data && (
        <div className={styles.wrapper}>
            <img src={data.image.asset.url} className={styles.heroImage} />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1>{data.title}</h1>
                    <h1>{data.dateOfBirth}</h1>
                    <h1>{data.inbredPercentage}</h1>
                </div>
                <span className={styles.descriptionContainer}>
                    {data.description}
                </span>
                {<>
                    <div className={styles.parentWrapper}>
                        <div className={styles.parentContainer}>
                            <img src={data.imageOfMum.asset.url} className={styles.parentImage} />
                            <h1 className={styles.parentTitle}>
                                {data.mum}
                            </h1>
                        </div>
                        <div className={styles.parentContainer}>
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
            </div >
        </div >

    )
}


export default Puppies