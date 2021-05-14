// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '7wam4akj', // you can find this in sanity.json
  dataset: 'prod', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  token: 'skJ06WFYi6E0apRHQuRwdgGr93jVTnHbk9wzw5tFkrAq4pkKgm190kjaCxKks2rua8lbbHwIpgp2dBbbrGgQfa2g0nS88Gmg9lqsbY4eXPFpvhVPvbpSPIUCH7XZBdooTdrZQ69ZBCynfDA8OxtBL6NradlQMHMbVjg1Q1NZaZB6Kf1umaWK'
})