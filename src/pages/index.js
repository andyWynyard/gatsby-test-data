import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const index = ({ data }) => (
  <Layout>
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} — {node.frontmatter.date}
            </h3>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export default index
