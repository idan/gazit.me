import { Link } from 'gatsby'
import React, { useLayoutEffect, useState } from 'react'
import SEO from '../components/seo'
import '../styles/base.css'

const NotFoundPage = () => {
  const [path, setPath] = useState('')
  useLayoutEffect(() => {
    setPath(window.location.pathname)
  })
  return (
    <div className="p-8 pt-32 max-w-3xl mx-auto">
      <SEO title="404: Not found" />
      <h1 className="text-3xl lg:text-7xl text-warmGrey-700 leading-none pb-6">
        That doesn’t exist.
      </h1>
      <p className="font-caps text-sm text-warmGrey-500 uppercase pb-3">
        Maybe it did once?
      </p>
      <p>
        <span className="text-warmGrey-500">&rarr;</span> Try visiting{' '}
        <a href={`/oldsite${path}`}>gazit.me/oldsite</a>
      </p>

      <p className="font-caps text-sm text-warmGrey-500 uppercase pb-3 pt-6">
        Whatever, dude
      </p>

      <p>
        <span className="text-warmGrey-500">&rarr;</span> Just take me to the{' '}
        <Link to="/">stuff that does exist</Link>.
      </p>
    </div>
  )
}

export default NotFoundPage
