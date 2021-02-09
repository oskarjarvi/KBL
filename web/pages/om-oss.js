import PageBuilder from '../components/pageBuilder'
import client from '../client'

// index.js
const About = (props) => {
  return (
    <div style={{ marginTop: 130 }}>
      <PageBuilder data={props.data.content} />
    </div>
  )
}
export async function getStaticProps() {

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
    props: { data }
  }
}

export default About;