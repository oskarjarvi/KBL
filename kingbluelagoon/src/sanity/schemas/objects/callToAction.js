// callToAction.js

export default {
  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'ctaImage',
      type: 'image',
      title: 'Bild'
    }
  ]
}