import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const blogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h3>{post.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export default blogPost
