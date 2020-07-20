import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../images/gatsby-facebook.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "bootstrap/dist/css/bootstrap.css";


const AboutPage = () => (
  <Layout>
    <div>
      {/* <a class = "back-link"
      href = "/">&laquo;
      Back to Main Menu </a> */}
      <AniLink fade to = "/">
        Back to Main Menu </AniLink>{" "}
    </div>
<div>
    <nav>
      <AniLink fade to = "/page-2" >
      Page 2 </AniLink>{" "}
    <AniLink fade to = "/Portfolio" >
      Page 3 </AniLink>{" "}
    <AniLink fade to = "/photos">
          Photos </AniLink>{" "}
        <AniLink fade to = "/gallery" >
      Gallery </AniLink>{" "}
 
      </nav>
      </div>
    <SEO title="Home" />
    <h1>About me</h1>
    <div> <img src={Images} alt="" style={{ width: 200, float: "right", marginLeft: 10, marginBottom: 5 }} /></div>
   
    <h2> My background: </h2>
    <p> What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
  
    <p>
      
    </p>

    <p> 
    {/* <div div style = {
      {
        maxWidth: `300`,
        marginBottom: `1.45rem`
      }
    } >
    
    </div> */}

    <AniLink fade to = "/" >
      Go to Home </AniLink>
    <AniLink fade to = "/page-2">
      Page 2 </AniLink>
    <AniLink fade to = "/Portfolio">
      Page 3 </AniLink>
    
   
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
   
 
  </Layout>
)

export default AboutPage
