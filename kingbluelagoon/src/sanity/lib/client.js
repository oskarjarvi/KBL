import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: 'skGTb86X5VV8hI9tEacPTYP2Y4hWdMmDNOERlN1cikC4EulABlW9RQv9esmcYxN3ZXp39ZfgbmGUgxNH2IQWZt4YbXOhBkXLzKa89dUxGv5C5olgz4PXUA4UPWBRvh4hyvuRKWYN73ndIqLNinnp9fGASVSq3K0sbIwZG9eG1sIQUschPBNq'
})
