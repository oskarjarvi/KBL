export default {
  title: 'Nyhet',  // The human-readable label. Used in the studio.
  name: 'post',   // Required. The field name, and key in the data record.
  type: 'document',  // Required. The name of any valid schema type.
  // Input fields below, as many as you need.
  fields: [
    {
      title: 'Namn',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'postText',
      type: 'text',
    },
  ]
}