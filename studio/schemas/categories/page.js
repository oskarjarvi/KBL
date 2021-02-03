export default {
    type: 'document',
    name: 'page',
    title: 'Sida',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Sektioner',
            description: 'Lägg till nya sektioner, ändra inte ordning här utan att diskutera med Oskar',
            of: [
                { type: 'hero' },
                { type: 'textWithIllustration' },
                { type: 'callToAction' },
                { type: 'gallery' },
                { type: 'newsFeed' },
                { type: 'callToActionBlock' },
                { type: 'reviewFeed' }
            ],
        },
    ],
}

