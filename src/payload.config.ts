import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { mcpPlugin } from '@payloadcms/plugin-mcp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Page } from './collections/Page'
import { s3Storage } from '@payloadcms/storage-s3'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Page],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
        endpoint: process.env.S3_ENDPOINT!,
        forcePathStyle: true,
      },
    }),
    mcpPlugin({
      collections: {
        page: {
          enabled: {
            find: true,
            create: true,  // Allow the agent to create pages
            update: true,
          },
          description: 'Collection for landing pages. Contains a structural blocks layout field.',
        },
        media: {
          enabled: {
            find: true,
            create: true,  // Allow the agent to upload assets if needed
          },
          description: 'Uploaded images, assets, and graphics used inside page blocks.',
        },
      },
      overrideAuth: async (req, getDefaultMcpAccessSettings) => {
        console.log("req", req)
        const url = new URL(req.url || '', 'http://localhost')
        const token = url.searchParams.get('token')
        if (token) {
          req.headers.set('Authorization', `Bearer ${token}`)
        }
        return getDefaultMcpAccessSettings()
      },
    }),
  ],
})
