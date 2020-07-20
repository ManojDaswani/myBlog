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
    <p>Portfolio project1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    <Img fluid={
      data.Frontpage.childImageSharp.fluid} alt="Frontpage2" style={{ width: 200, height: 150, float: "left", marginRight: 20, marginBottom: 10 }} />
    <p> Image fluid </p>

    <Img fluid={
      data.Frontpage.childImageSharp.fluid} alt="Frontpage3" style={{ width: 200, height: 150, float: "right", marginLeft: 20, marginBottom: 10 }} />
    <p>Portfolio project2 
WLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. </p>

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
