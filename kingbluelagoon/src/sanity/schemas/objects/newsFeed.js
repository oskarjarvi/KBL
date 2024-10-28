
export default {
    name: "newsFeed",
    type: "object",
    title: "Nyheter",
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Titel'
        },
        {
            title: 'Nyheter',
            name: 'newsArray',
            // A reference is a way to point to another document
            type: 'array',
            description: 'Välj max 3 nyheter som ska synas på startsidan',
            of: [{
                title: 'Nyheter',
                name: 'news',
                // A reference is a way to point to another document
                type: 'reference',
                // This reference is only allowed to point to a document of the type person,
                // we could list more types, but let's keep this simple:
                to: [{ type: 'post' }]
            },]

        },
    ]
}