export default {
    title: 'Kontaktuppgifter',  // The human-readable label. Used in the studio.
    name: 'contactInfo',   // Required. The field name, and key in the data record.
    type: 'document',  // Required. The name of any valid schema type.
    initialValue: {
        title: 'Pias Kontaktuppgifter'
    },
    __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],

    // Input fields below, as many as you need.
    fields: [
        {
            title: 'Namn',
            name: 'title',
            type: 'string',
            description: 'Namn på fliken, ändra inte detta.'
        },
        {
            title: 'Address',
            name: 'adress',
            type: 'string',
        },
        {
            title: 'Telefonnr',
            name: 'tel',
            type: 'number',
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
        },
        {
            title: 'Länkar',
            name: 'links',
            // A reference is a way to point to another document
            type: 'array',
            of: [{
                name: 'link',
                type: 'link',
                title: 'Länk'
            }]
        },
    ]
}