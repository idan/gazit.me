import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FunctionComponent } from 'react'

type HeaderProps = {
  title?: string
}

const Header: FunctionComponent<HeaderProps> = props => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(relativePath: { eq: "idan-sketch.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="pt-6 pb-8 max-w-sm lg:max-w-md mx-auto px-3">
      <div className="flex">
        <div className="w-32 flex-none">
          <Link to="/">
            <Img fluid={data.avatar.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="pt-8 pl-3 flex-1">
          <Link
            to="/"
            className="no-underline font-light text-2xl leading-none"
          >
            Idan Gazit
          </Link>
          <p className="font-caps text-xs uppercase tracking-wider text-warmGrey-500 pt-1 border-t border-warmGrey-200">
            Data, Design and Meaning
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
