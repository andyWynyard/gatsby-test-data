import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const about = ({ data }) => (
  <Layout>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem
      iure vero dolore in inventore esse labore numquam, deleniti doloribus
      similique accusantium est culpa ratione minus fuga, illo tempore vitae.
    </p>
  </Layout>
)

export default about

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
