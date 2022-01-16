import React, { FunctionComponent } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children?: React.ReactNode
  title?: string
}

const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Header title={title} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
