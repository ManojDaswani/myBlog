import React from 'react';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import toggleFunction from './toggleFunction'

const Gallery = ({data}) => (
    <Layout>
        <div>  
            <button onClick={toggleFunction}> Toggle dark mode </button>
            <nav> 
                <AniLink fade to = "/">Back to Main Menu </AniLink>{" "}
                <AniLink fade to = "/page-2" >Page 2 </AniLink>{" "}
                <AniLink fade to = "/Portfolio" >Portfolio </AniLink>{" "}
                <AniLink fade to = "/photos">Photos </AniLink>{" "}
                <AniLink AniLink fade to = "/using-typescript/" >Go to "Using TypeScript </AniLink>
            </nav>
        </div>
    <SEO title="Image gallery" />
        <h1>Introduction Gallery</h1>
        
        {/* using the components below */}
        <Img fluid={
            data.gatsbyXXX.childImageSharp.fluid} alt="ManojId" style={{ width: 150, float: "right", marginLeft: 20, marginBottom: 10 }} />

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <Img fixed={
            data.gatsbyProfileImage.childImageSharp.fixed} alt="ProfileImage" style={{ width: 200, height: 150, float: "left", marginRight: 20, marginBottom: 10 }} />
        


            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        
    </Layout>
    );

Gallery.propTypes = {
data:PropTypes.object.isRequired,
};

export const query = graphql`
    {
        gatsbyProfileImage: file(relativePath: {
            eq: "gatsby-XXX.png"
        }) {
            childImageSharp {
                fixed(width: 512) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        gatsbymanojid: file(relativePath: {
            eq: "gatsby-XXX.png"
        }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Gallery;
