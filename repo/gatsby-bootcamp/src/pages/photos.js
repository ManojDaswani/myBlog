import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import SEO from "../components/seo"



export default () => (
  <Layout>

    {/* <a className = "back-link" href = "/">&laquo; Back to Main Menu </a> */}
    <div>
      <nav>
        <AniLink fade to = "/">
        Back to Main Menu </AniLink>{" "}
    <AniLink fade to = "Portfolio" >
          Page 3 </AniLink>{" "}
        <AniLink fade to = "/gallery" >
      Gallery </AniLink>{" "}
      
      <AniLink fade to = "/about" >
          About </AniLink>{" "}
        </nav>
     </div>   

    <SEO title="Working with Gatsby Image" />
    <h1>Photos</h1>
  </Layout>
)


