import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import client from '../../client'
import styles from '../../styles/dog.module.scss'
import SwappableContainer from '../../components/swappableContainer'
import Gallery from '../../components/gallery'


const Dog = () => {
  const [data, setData] = useState([])
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
      { data && data.image &&
        <>
          <div className={styles.hero} style={{ backgroundImage: `url(${data.image.asset.url})` }}></div>
          <h1 className={styles.title}>King blue lagoon {data.title}</h1>
          <p>{data.regnumber}</p>
          <SwappableContainer data={{ lineage: data.lineage.asset.url, healthInformation: data.healthInformation, showcaseInformation: data.showcaseInformation }} />
          <Gallery data={data.imageGallery} />
        </>
      }
    </div>
  )
}


export default Dog