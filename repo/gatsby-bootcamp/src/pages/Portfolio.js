import React from 'react';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import toggleFunction from './toggleFunction'

const Portfolio = ({data}) => (
  <Layout>
    <div>
      <button onClick={toggleFunction}> Toggle dark mode </button>
      <nav>
        <AniLink fade to="/">Back to Main Menu </AniLink>{" "}
        <AniLink fade to="/page-2" >Page 2 </AniLink>{" "}
    
        <AniLink fade to="/photos">Photos </AniLink>{" "}
        <AniLink AniLink fade to="/using-typescript/" >Go to "Using TypeScript </AniLink>
      </nav>
    </div>
    
    <SEO title="Portfolio" />
    <h1>Portfolio Page</h1>
    {/* using the components below */}
    <Img fluid={
      data.Frontpage.childImageSharp.fluid} alt="Frontpage1" style={{ width: 400, height: 150, float: "right", marginLeft: 40, marginBottom: 20 }} />
    <p>Portfolio projects 
While working at MVP Studio, I have realised the importance of team - work, communication and collaboration which makes learning and getting results so much faster and simpler.One of my favourite ways to learn is to teach.I find teaching others gratifying and I know that in order to teach we just have to be one chapter ahead.Just to enhance my knowledge in the back end, I had recently build an interactive bank’ s website using PHP, JS, HTML and CSS and phpMyAdmin. </p>

    <Img fluid={
      data.Frontpage.childImageSharp.fluid} alt="Frontpage2" style={{ width: 200, height: 150, float: "left", marginRight: 20, marginBottom: 10 }} />
    <p> Image fluid </p>

    <Img fluid={
      data.Frontpage.childImageSharp.fluid} alt="Frontpage3" style={{ width: 200, height: 150, float: "right", marginLeft: 20, marginBottom: 10 }} />
    <p>Portfolio projects 
While working at MVP Studio, I have realised the importance of team - work, communication and collaboration which makes learning and getting results so much faster and simpler.One of my favourite ways to learn is to teach.I find teaching others gratifying and I know that in order to teach we just have to be one chapter ahead.Just to enhance my knowledge in the back end, I had recently build an interactive bank’ s website using PHP, JS, HTML and CSS and phpMyAdmin. </p>

    <Img fluid={
      data.Frontpage.childImageSharp.fluid} alt="Frontpage4" style={{ width: 400, height: 150, float: "left", marginRight: 20, marginBottom: 10 }} />
    <p> Image fluid </p>
    
    <div>
      <nav>
        <AniLink fade to="/page-2" >
          Page 2 </AniLink>{" "}

        <AniLink fade to="/">
          Go back to the homepage </AniLink>{" "}
      </nav>
    </div>
  </Layout>
);
Portfolio.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql `
    {
        Frontpage: file(relativePath: {
            eq: "Frontpage.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        Frontpage: file(relativePath: {
            eq: "Frontpage.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Portfolio
