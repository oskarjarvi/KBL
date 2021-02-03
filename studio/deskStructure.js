import S from '@sanity/desk-tool/structure-builder'
import plannedLitter from './schemas/categories/plannedLitter'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Kontaktuppgifter')
                .child(
                    S.editor()
                        .schemaType('contactInfo')
                        .documentId('contactInfo')
                ),

            // Add a visual divider (optional)
            S.divider(),
            // Make a new list item
            S.listItem()
                // Give it a title
                .title('Alla hundar')
                .child(
                    // Make a list in the second pane called Portfolio
                    S.list()
                        .title('Alla hundar')
                        .items([
                            // Add the first list item
                            S.listItem()
                                .title('Hundar')
                                // This automatically gives it properties from the project type
                                .schemaType('dog')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('dog').title('Hundar')),
                            // Add a second list item
                            S.listItem()
                                .title('Kullar')
                                .child(S.list()
                                    .title('Kullar')
                                    .items([
                                        S.listItem()
                                            .title('Tidigare kullar')
                                            .schemaType('previousLitter')
                                            .child(S.documentTypeList('previousLitter').title('Tidigare kullar')),
                                        S.listItem()
                                            .title('Planerade kullar')
                                            .schemaType('plannedLitter')
                                            .child(S.documentTypeList('plannedLitter').title('Planerade kullar'))
                                    ])),
                            S.listItem()
                                .title('Valpar')
                                .schemaType('litter')
                                .child(S.documentTypeList('litter').title('Valpar'))

                        ])
                ),
            S.listItem()
                .title('Nyheter')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Nyheter')),

            ...S.documentTypeListItems().filter(listItem =>
                !['dog', 'previousLitter', 'litter', 'plannedLitter', 'post', 'contactInfo'].includes(
                    listItem.getId()
                ))]
        )