import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    formatOptions: {
      format: 'webp',
      options: {
        quality: 75,
      },
    },
    resizeOptions: {
      width: 1920,
      height: 1080,
      fit: 'inside',
      withoutEnlargement: true,
    },
  },
}
