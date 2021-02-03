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
            title: 'Född',
            name: 'dateOfBirth',
            type: 'date'

        },
        {
            title: 'Inavelsgrad',
            name: 'inbredPrecentage',
            type: 'number'
        },
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Beskrivning',
            name: 'description',
            type: 'text',
            description: 'Beskrivning av valparna, t.ex färg',
        },
        {
            title: 'Mamman',
            name: 'mother',
            // A reference is a way to point to another document
            type: 'reference',
            // This reference is only allowed to point to a document of the type person,
            // we could list more types, but let's keep this simple:
            to: [{ type: 'dog' }]
        },
        // {
        //     title: 'Mamman',
        //     name: 'mum',
        //     type:'string',
        //     description:'Namn på mamman av kullen',
        // },
        // {
        //     title: 'Bild',
        //     name: 'imageOfMum',
        //     type:'image',
        //     description:'Bild på mamman av kullen',
        // },
        // {
        //     title: 'Beskrivning',
        //     name: 'descriptionOfMum',
        //     type: 'text',
        //     description:'Beskrivning på mamman av kullen',
        // },
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

    ]
}