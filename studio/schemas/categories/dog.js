export default {
    title: 'Hund',  // The human-readable label. Used in the studio.
    name: 'dog',   // Required. The field name, and key in the data record.
    type: 'document',  // Required. The name of any valid schema type.
    // Input fields below, as many as you need.
    fields: [
        {
            title: 'Namn',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Regnr',
            name: 'regnumber',
            type: 'string',
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
            title: 'Hundhimmelen',
            name: 'dead',
            type: 'boolean',
        },
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Född',
            name: 'dateOfBirth',
            type: 'date'

        },
        {
            title: 'Stamtavla',
            name: 'lineage',
            type: 'image',
        },
        {
            title: 'Hälsoinformation',
            name: 'healthInformation',
            type: 'text',
        },
        {
            title: 'Utställning',
            name: 'showcaseInformation',
            type: 'text',
        },
        {
            name: 'imagegallery',
            type: 'array',
            title: 'Bild galleri',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text'
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