export default {
    title: 'Kull',  // The human-readable label. Used in the studio.
    name: 'litter',   // Required. The field name, and key in the data record.
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
            title: 'Omslagsbild',
            name: 'image',
            type: 'image',
            description: 'Omslagsbild på kullen om det finns någon',
        },
        {
            title: 'Status',
            name: 'status',
            type: 'string',
            options: {
                list: [
                    { title: 'Tidigare kull', value: 'previous' },
                    { title: 'Aktiv kull', value: 'active' },
                    { title: 'Planerad kull', value: 'planned' }

                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
            }
        },
        {
            title: 'Beskrivning',
            name: 'description',
            type: 'text',
        },
        {
            title: 'Datum',
            name: 'dateOfBirth',
            type: 'date',
            description: 'Datum då kullen föddes eller är planerad att födas'

        },
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
