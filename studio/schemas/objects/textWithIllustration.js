// textWithIllustration.js

export default {
  name: "textWithIllustration",
  type: "object",
  title: "Text med bild",
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Rubrik'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Underrubrik'
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Bild',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativ text',
          description: 'Det här är för de som har skärmläsare, beskriv bilden du laddade upp'
        }
      ]
    }
  ]
}