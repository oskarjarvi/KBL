// hero.js

export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Rubrik'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logotyp'
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