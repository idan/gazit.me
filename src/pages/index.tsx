import { graphql, Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

type IndexPageProps = {
  data: any
}

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <hr />
    <ul>
      <li>
        <Link to="/2012/12/05/designing-presentations.html">
          /2012/12/05/designing-presentations.html
        </Link>
      </li>
      <li>
        <Link to="/2012/12/05/designing-presentations">
          /2012/12/05/designing-presentations
        </Link>
      </li>
    </ul>
    {data.allMdx.edges.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <Link to={`/writing${node.fields.slug}`}>{title}</Link>
        </div>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
