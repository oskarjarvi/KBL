
export default {
    name: "callToActionBlock",
    type: "object",
    title: "Bildblock med länkar",
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Bilder med länkar',
            name: 'callToActionBlock',
            // A reference is a way to point to another document
            type: 'array',
            description: 'Välj max 2st som ska synas på startsidan',
            of: [{
                title: 'Bild med länk',
                name: 'CTA',
                // A reference is a way to point to another document
                type: 'callToAction',

            },]

        },
    ]
}