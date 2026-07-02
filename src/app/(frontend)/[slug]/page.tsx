import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'
import config from '@/payload.config'
import PageRenderer from '@/components/PageRenderer'
import '../styles.css'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch the page with the matched slug
  const matchedPages = await payload.find({
    collection: 'page',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const page = matchedPages.docs[0]

  // If the page doesn't exist, trigger a 404
  if (!page) {
    notFound()
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Floating admin navigation utilities */}
      <div 
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          display: 'flex',
          gap: '10px'
        }}
      >
        <a 
          href="/"
          style={{
            background: 'rgba(30, 30, 30, 0.75)',
            backdropFilter: 'blur(12px)',
            color: '#fff',
            padding: '10px 18px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
            transition: 'background 0.3s ease',
          }}
        >
          ← Home
        </a>
        <a 
          href={`${payloadConfig.routes.admin}/collections/page/${page.id}`}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#000',
            padding: '10px 18px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
            transition: 'background 0.3s ease',
          }}
        >
          Edit in CMS
        </a>
      </div>
      <PageRenderer page={page} />
    </div>
  )
}
