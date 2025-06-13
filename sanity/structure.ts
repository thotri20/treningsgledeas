import { HomeIcon } from '@sanity/icons'
import { CalendarIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sider')
    .items([
      S.listItem()
        .title('Hjemmeside')
        .icon(HomeIcon)
        .schemaType('homepage')
        .child(
          S.editor()
            .title('Hjemmeside')
            .schemaType('homepage')
            .documentId('homepage'),
        ),
      S.divider(),
      S.listItem()
        .title('Treningsøkter')
        .icon(CalendarIcon)
        .schemaType('treningsokt')
        .child(
          S.documentTypeList('treningsokt')
            .title('Treningsøkter')
        ),
    ])

