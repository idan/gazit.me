import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import './layout.css'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <main>{children}</main>
        <footer className="py-5 uppercase font-light tracking-widest text-xs text-gray-600 font-caps">
          © {new Date().getFullYear()} Idan Gazit &bull; All rights reserved
        </footer>
      </div>
    </div>
  )
}

export default Layout
