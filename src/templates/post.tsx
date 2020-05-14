import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/post.css'

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
    <Layout title={data.mdx.frontmatter.title}>
      <SEO title={data.mdx.frontmatter.title} />
      <article className="mdxpost flex flex-col items-stretch">
        <header className="pt-5 pb-5 md:pb-10 lg:pb-20 self-center">
          <h1
            className="px-3 xl:text-8xl md:text-7xl sm:text-6xl text-5xl max-w-6xl text-gray-900 font-normal leading-none lg:leading-tight"
            style={{ letterSpacing: '-0.005em' }}
          >
            {data.mdx.frontmatter.title}
          </h1>
          <div className="px-3 font-caps text-xs uppercase tracking-wider text-warmGrey-600 sm:border-t border-warmGrey-200 pt-1">
            published on {data.mdx.frontmatter.date}
          </div>
        </header>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
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
