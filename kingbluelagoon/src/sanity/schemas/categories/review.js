export default {
    title: 'Omdömen',  // The human-readable label. Used in the studio.
    name: 'review',   // Required. The field name, and key in the data record.
    type: 'document',  // Required. The name of any valid schema type.
    // Input fields below, as many as you need.
    fields: [
        {
            title: 'Namn',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Omdöme',
            name: 'reviewMessage',
            type: 'text',
        },


    ]
}