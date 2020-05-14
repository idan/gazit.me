import React, { FunctionComponent } from 'react'

type FooterProps = {}

const Footer: FunctionComponent<FooterProps> = props => {
  return (
    <footer className="py-5 uppercase font-light tracking-widest text-xs text-gray-600 font-caps max-w-sm mx-auto px-3">
      <span className="whitespace-no-wrap pr-5">
        © {new Date().getFullYear()} Idan Gazit
      </span>
      <span className="whitespace-no-wrap">All rights reserved</span>
    </footer>
  )
}

export default Footer
