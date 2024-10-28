
export const structure = (S) =>
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
      S.divider(),
      S.listItem()
        .title('Alla hundar')
        .child(
          S.list()
            .title('Alla hundar')
            .items([
              S.listItem()
                .title('Hundar')
                .schemaType('dog')
                .child(S.documentTypeList('dog').title('Hundar')),
              S.listItem()
                .title('Kullar')
                .schemaType('litter')
                .child(S.documentTypeList('litter').title('Kullar')),
            ])
        ),
      S.listItem()
        .title('Nyheter')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Nyheter')),

      // Filter out specific types as in your old structure
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'dog',
            'previousLitter',
            'litter',
            'plannedLitter',
            'post',
            'contactInfo',
          ].includes(listItem.getId())
      ),
    ])