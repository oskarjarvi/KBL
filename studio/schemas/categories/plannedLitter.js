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
            title: 'Beskrivning',
            name: 'description',
            type: 'text',
        },
        {
            title:'Planerat datum',
            name:'dateOfBirth',
            type:'date'

        },
        {
            title: 'Föräldrar',
            name: 'parents',
            // A reference is a way to point to another document
            type: 'reference',
            // This reference is only allowed to point to a document of the type person,
            // we could list more types, but let's keep this simple:
            to: [{ type: 'dog' }]
        },
        //alternativly
        {
            title: 'Mamman',
            name: 'mum',
            type:'string',
            description:'Namn på mamman av kullen',
        },
        {
            title: 'Bild',
            name: 'imageOfMum',
            type:'image',
            description:'Bild på mamman av kullen',
        },
        {
            title: 'Beskrivning',
            name: 'descriptionOfMum',
            type: 'text',
            description:'Beskrivning på mamman av kullen',
        },
        {
            title: 'Pappan',
            name: 'dad',
            type:'string',
            description:'Namn på pappan av kullen',
        },
        {
            title: 'Bild',
            name: 'imageOfDad',
            type:'image',
            description:'Bild på pappan av kullen',
        },
        {
            title: 'Beskrivning',
            name: 'descriptionOfDad',
            type: 'text',
            description:'Beskrivning på pappan av kullen',
        },
      
    ]
  }
  