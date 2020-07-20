import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <div>
      {/* <a class = "back-link"
      href = "/">&laquo;
      Back to Main Menu </a> */}
      <AniLink fade to = "/">
        Back to Main Menu </AniLink>{" "}
    </div>
    
  </Layout>
)

export default SecondPage
