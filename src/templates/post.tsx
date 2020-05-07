import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

type PostProps = {
  data: {
    mdx: {
      id: string
      excerpt: string
      body: any
      frontmatter: {
        title: string
        date: string
        description: string
      }
    }
  }
}

const Post: FunctionComponent<PostProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default Post
