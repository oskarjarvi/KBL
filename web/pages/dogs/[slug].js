import groq from 'groq'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import client from '../../client'



const Dog = () => {
  const [data, setData] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (router.query.slug !== undefined) {
      let query = groq`*[_type == "dog" && slug.current == "${router.query.slug}"][0]`
      console.log(query)

      client.fetch(query).then(res => {
        setData(res)
      })
    }
  }, [])
  console.log(data)


  return (
    <div style={{ marginTop: 85, height: 1000 }}>

    </div>
  )
}


export default Dog