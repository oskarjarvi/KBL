import PageBuilder from '../components/pageBuilder'
import { client } from '../sanity/lib/client';

// index.js
const Index = ({ data }) => {
  return (
    <div>
      {data?.content && <PageBuilder data={data.content} />}
    </div>
  )
}
export async function getServerSideProps() {

  let data = await client.fetch(`
    *[_type == "page" && slug.current == "startsida"][0] {
    ...,
    content[] {
      _type == "hero" => {
        ...,
        logo { ..., asset->{url}}, 
        image { ..., asset->{url} }
      },
      _type == "callToActionBlock" => {
        ...,
        callToActionBlock[]{ 
        ...,ctaImage{asset->{url}}
        }
      },
      _type == "gallery" => {
        ...,
        images[] { ..., asset->{url} }
      },
      _type == "newsFeed" => {
        ...,
        newsArray[]->
      },
      _type == "reviewFeed" => {
       ...
      },
      _type == "textWithIllustration" => {
        ...,
        image { ..., asset->{url} }
      },
      _type == "callToAction" => {
        ...
      }
    }
  }
  `)
  return {
    props: { data },
  }
}

export default Index;