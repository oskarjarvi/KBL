import PageBuilder from '../components/pageBuilder'
import styles from '../styles/about.module.scss'
import { client } from '../sanity/lib/client'

// index.js
const About = ({ data }) => {
  return data && (
    <div className={styles.aboutPage}>
      <PageBuilder data={data.content} />
    </div>
  )
}
export async function getServerSideProps() {

  let data = await client.fetch(`
    *[_type == "page" && slug.current =='about'] {
      content[] {
        logo {
          "image": asset ->
        },
        image {
          "hero": asset->,
        },
        heading,
        newsArray[]->,
        callToActionBlock[]{
          ctaImage {
            asset-> {
              url 
            }
          },
          ...
        },
        ...
      },
    ...
    }[0]
    `)
  return {
    props: { data: data }
  }
}

export default About;