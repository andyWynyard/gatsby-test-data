import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const layout = ({ children }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div style={{ margin: "0 auto", maxWidth: "700px" }}>
          <Link to={`/`}>
            <h3 style={{ display: "inlineBlock" }}>Home</h3>
          </Link>
          <Link style={{ float: "right", margin: "1rem" }} to={`/my-files/`}>
            All Site Files
          </Link>
          <Link style={{ float: "right", margin: "1rem" }} to={`/about/`}>
            About
          </Link>
          <h1>{data.site.siteMetadata.title}</h1>
          {children}
        </div>
      )}
    />
  )
}

export default layout
