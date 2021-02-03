// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '7wam4akj', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  token: 'skq2lsGCD831mOs4NlehpbIVkbTlRejSzHtUf3cJPpvrda2G5KlcKJbw8urqsRBzZyBCCsMOgRAS6uaXF8Nucj3Z4eQUAw6Oo2VH3ftsK24TEegosEBEEMJkHSMQG74RnZA1DGJkiDfLZiRkXWlG1qE0WxPgdNiLJtZUgYMb1VDtjZivZwhy'
})