import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import client from '../../client'
import styles from '../../styles/dog.module.scss'
import SwappableContainer from '../../components/swappableContainer'
import Gallery from '../../components/gallery'
import sharedStyles from '../../styles/shared.module.scss';


const Dog = () => {
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (router.query.slug !== undefined) {
      let query = groq`*[_type == "dog" && slug.current == "${router.query.slug}"][0]{
        image{asset->{url}},
        title,
        regnumber,
        dateOfBirth,
        healthInformation,
        lineage{asset->{url}},
        "imageGallery": imagegallery[].asset->url,
        showcaseInformation
      }`


      client.fetch(query).then(res => {
        setData(res)
      })
    }
  }, [router.query.slug])



  return (

    <div className={styles.dogContainer}>
      {data &&
        <>
          <img className={styles.hero} src={data.image.asset.url} />
          <h1 className={styles.title}>King blue lagoon {data.title}</h1>
          <p>{data.regnumber}</p>
          <div className={sharedStyles.wrapper}>
            <div className={sharedStyles.container}>
              <SwappableContainer
                columns={[
                  { name: 'Stamtavla', type: 'img', data: { url: data.lineage.asset.url } },
                  { name: 'Hälsoinformation', data: { content: data.healthInformation } },
                  { name: 'Utställning', data: { content: data.showcaseInformation } }]}
              />
              <Gallery data={data.imageGallery} />
            </div>
          </div>
        </>
      }
    </div>

  )
}


export default Dog