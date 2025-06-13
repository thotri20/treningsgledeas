import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { homepage } from './pages/homepage.schema'
import { treningsokt } from './pages/treningsokt.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, homepage, treningsokt, categoryType, postType, authorType],
}
