export default {
    title: 'Planerad kull',  // The human-readable label. Used in the studio.
    name: 'plannedLitter',   // Required. The field name, and key in the data record.
    type: 'document',  // Required. The name of any valid schema type.
    // Input fields below, as many as you need.
    fields: [
        {
            title: 'Namn',
            name: 'title',
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
            title: 'Beskrivning',
            name: 'description',
            type: 'text',
        },
        {
            title: 'Planerat datum',
            name: 'dateOfBirth',
            type: 'date'

        },
        //alternativly
        {
            title: 'Mamman',
            name: 'mum',
            type: 'string',
            description: 'Namn på mamman av kullen',
        },
        {
            title: 'Bild',
            name: 'imageOfMum',
            type: 'image',
            description: 'Bild på mamman av kullen',
        },
        {
            title: 'Beskrivning',
            name: 'descriptionOfMum',
            type: 'text',
            description: 'Beskrivning på mamman av kullen',
        },
        {
            title: 'Stamtavla',
            name: 'mumLineage',
            type: 'image',
            description: 'Mammans stamtavla',
        },
        {
            title: 'Pappan',
            name: 'dad',
            type: 'string',
            description: 'Namn på pappan av kullen',
        },
        {
            title: 'Bild',
            name: 'imageOfDad',
            type: 'image',
            description: 'Bild på pappan av kullen',
        },
        {
            title: 'Beskrivning',
            name: 'descriptionOfDad',
            type: 'text',
            description: 'Beskrivning på pappan av kullen',
        },
        {
            title: 'Stamtavla',
            name: 'dadLineage',
            type: 'image',
            description: 'Pappans stamtavla',
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
