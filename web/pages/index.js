import PageBuilder from '../components/pageBuilder'
import client from '../client'

// index.js
const Index = ({ data }) => {
  return (
    <div>
      <PageBuilder data={data.content} />
    </div>
  )
}
export async function getServerSideProps() {

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
    props: { data },
    revalidate: 1,
  }
}

export default Index;