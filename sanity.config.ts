import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { structure, newDocumentOptions, singletonActions } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Эвакуатор 31',

  projectId: 'ddnpgu5d',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: newDocumentOptions,
  },

  document: {
    actions: singletonActions,
  },
})
