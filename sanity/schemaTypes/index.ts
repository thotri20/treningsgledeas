import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { homepage } from './pages/homepage.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, homepage, categoryType, postType, authorType],
}
