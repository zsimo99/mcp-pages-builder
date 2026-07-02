import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import PageRenderer from '@/components/PageRenderer'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch the page with slug "home"
  const homePages = await payload.find({
    collection: 'page',
    where: {
      slug: {
        equals: 'home',
      },
    },
    depth: 2,
  })

  const homePage = homePages.docs[0]

  // If a home page exists, render it
  if (homePage) {
    return <PageRenderer page={homePage} />
  }

  // Otherwise, fetch all pages to display a premium index landing dashboard
  const allPages = await payload.find({
    collection: 'page',
    depth: 1,
  })

  const pagesList = allPages.docs

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg" />
            <img
              alt="Payload Logo"
              height={40}
              src="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg"
              width={40}
            />
          </picture>
          <span className="logo-text">Custom Page Builder</span>
        </div>
        <div className="admin-btn-container">
          <a className="btn btn-primary" href={payloadConfig.routes.admin}>
            Go to Admin Dashboard
          </a>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-hero">
          <h1>Dynamic Layout Engine</h1>
          <p>
            Create, style, and structure complex nested web layouts right from the Payload CMS admin interface.
            Define sections, containers, text content, and media blocks, and see them rendered instantly on the frontend.
          </p>
        </div>

        <section className="dashboard-content">
          <div className="content-title-row">
            <h2>Active Custom Pages</h2>
            {pagesList.length > 0 && (
              <span className="badge">{pagesList.length} Page{pagesList.length > 1 ? 's' : ''}</span>
            )}
          </div>
          
          {pagesList.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🗂️</div>
              <h3>No Pages Configured Yet</h3>
              <p>
                Get started by creating a new page in the Payload Admin Panel. 
                Configure a page with the slug <code>home</code> to automatically set it as this default index view!
              </p>
              <a className="btn btn-accent" href={`${payloadConfig.routes.admin}/collections/page/create`}>
                Create Your First Page
              </a>
            </div>
          ) : (
            <div className="pages-grid">
              {pagesList.map((page: any) => (
                <a href={`/${page.slug}`} key={page.id} className="page-card">
                  <div className="page-card-icon">📄</div>
                  <div className="page-card-info">
                    <h3>{page.title}</h3>
                    <span className="page-card-slug">/{page.slug}</span>
                  </div>
                  <div className="page-card-arrow">View Page →</div>
                </a>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>Powered by Next.js & Payload CMS</p>
      </footer>
    </div>
  )
}
