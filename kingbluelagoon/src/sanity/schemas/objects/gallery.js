// imageGallery.js

export default {
    name: "gallery",
    type: "object",
    title: "Bildgalleri",
    fields: [
        {
            name: 'images',
            type: 'array',
            title: 'Bilder',
            of: [
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
            ],
            options: {
                layout: 'grid'
            }
        }
    ]
}