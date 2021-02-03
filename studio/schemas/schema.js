// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import dog from './categories/dog'
import litter from './categories/litter'
import previousLitter from './categories/previousLitter'
import plannedLitter from './categories/plannedLitter'
import post from './categories/post'
import page from './categories/page'
import hero from './objects/hero'
import textWithIllustration from './objects/textWithIllustration'
import callToAction from './objects/callToAction'
import gallery from './objects/gallery'
import contactInfo from './categories/contactInfo'
import link from './objects/link'
import newsFeed from './objects/newsFeed'
import callToActionBlock from './objects/callToActionBlock'
import review from './categories/review'
import reviewFeed from './objects/reviewFeed'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    dog,
    litter,
    previousLitter,
    plannedLitter,
    post,
    page,
    hero,
    textWithIllustration,
    callToAction,
    gallery,
    contactInfo,
    link,
    newsFeed,
    callToActionBlock,
    review,
    reviewFeed
  ]),
})
