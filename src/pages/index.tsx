import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { FunctionComponent } from 'react'
import SEO from '../components/seo'
import '../styles/base.css'

type IndexPageProps = {
  data: any
}

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => (
  <div className="flex flex-col lg:flex-row lg:max-w-screen-xl lg:mx-auto items-stretch text-warmGrey-800">
    <SEO title="Home" />

    <div className="w-auto lg:max-w-4xl lg:flex-1">
      <Img fluid={data.avatar.childImageSharp.fluid} />
    </div>
    <div className="lg:flex-1 px-4">
      <div className="text-center lg:text-left flex flex-col">
        <h1 className="order-2 text-4xl pt-3 lg:pt-6">Hi there.</h1>
        <h2 className="order-1 font-caps text-xs lg:text-base pt-3 lg:pt-64 font-light uppercase text-warmGrey-700 tracking-tight">
          <span className="font-normal text-warmGrey-900">Idan Gazit</span>{' '}
          makes things in San Francisco.
        </h2>
        <div className="order-3 text-xl pt-3 text-left max-w-lg mx-auto lg:mx-0 font-light">
          <p className="pb-5">
            I make products that delight and inform. I'm a developer, a
            designer, a datavis junkie, and a typograpahy nerd. I'm particularly
            interested in data, the tools we use for working with it, and how we
            use it to tell meaningful stories.
          </p>
          <p className="pb-3">
            <span className="bg-warmGrey-200 px-1">
              I'm currently a director of research at{' '}
              <a href="https://github.com">GitHub</a>
            </span>
            , in the office of the CTO. I figure out how to improve the lives of
            developers while trying to avoid buzzwords about innovation.
          </p>

          <h3 className="pt-6 pb-3 uppercase text-sm tracking-widest font-medium text-warmGrey-900">
            Previously
          </h3>
          <p className="pb-3">
            As a principal engineer at{' '}
            <a className="link" href="https://heroku.com">
              Heroku
            </a>
            , I was responsible for developing a unified interface to our data
            products. Prior to that, I was design lead on{' '}
            <a href="https://devcenter.heroku.com/articles/metrics">
              Heroku App Metrics
            </a>
            , which visualized app performance and addressed customer complaints
            about the opacity of Heroku.
          </p>

          <p className="pb-3">
            I am an alumnus of the{' '}
            <a className="link" href="https://djangoproject.com">
              Django Project
            </a>{' '}
            core team, where I was a developer and lead designer for the
            framework. I delivered the keynote address at Djangocon US 2011, and
            designed visual identities for various PyCons and DjangoCons.
          </p>

          <p className="pb-3">
            I was a founding mentor at{' '}
            <a href="http://www.campustelaviv.com/" className="link">
              Google Campus TLV
            </a>
            , where I had the opportunity to help hundreds of startups distill
            their product direction. Google later extended the campus program
            worldwide.
          </p>

          <h3 className="pt-6 pb-3 uppercase text-sm tracking-widest font-medium text-warmGrey-900">
            Writing
          </h3>
          <div>
            {data.allMdx.edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug} className="pb-3">
                  <Link to={`/writing${node.fields.slug}`} className="link">
                    {title}
                  </Link>
                  <div className="italic text-warmGrey-500 text-base">
                    {node.frontmatter.date}
                  </div>
                </div>
              )
            })}
          </div>

          <footer className="py-5 uppercase font-light tracking-widest text-xs text-gray-600 font-caps ">
            <span className="whitespace-no-wrap pr-5">
              © {new Date().getFullYear()} Idan Gazit
            </span>
            <span className="whitespace-no-wrap">All rights reserved</span>
          </footer>
        </div>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(relativePath: { eq: "idan-sketch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default IndexPage
