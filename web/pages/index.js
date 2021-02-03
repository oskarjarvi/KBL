import PageBuilder from '../components/pageBuilder'
import client from '../client'

// index.js
const Index = (props) => {
  return (
    <div>
      <PageBuilder data={props.data.content} />
    </div>
  )
}
export async function getStaticProps() {

  let data = await client.fetch(`
  *[_type == "page" && slug.current =='startsida'] {
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

export default Index;