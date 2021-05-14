import PageBuilder from '../components/pageBuilder'
import client from '../client'
import styles from '../styles/about.module.scss'
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
    *[_type == "page" && slug.current =='om-oss'] {
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