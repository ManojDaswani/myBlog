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
            data.gatsbymanojid.childImageSharp.fluid} alt="ManojId" style={{ width: 150, float: "right", marginLeft: 20, marginBottom: 10 }} />

            <p> While working at MVP Studio, I have realised the importance of team-work, communication and collaboration which makes learning and getting results so much faster and simpler. One of my favourite ways to learn is to teach. I find teaching others gratifying and I know that in order to teach we just have to be one chapter ahead. Just to enhance my knowledge in the back end, I had recently build an interactive bank’s website using PHP, JS, HTML and CSS and phpMyAdmin. </p>
        <Img fixed={
            data.gatsbyProfileImage.childImageSharp.fixed} alt="ProfileImage" style={{ width: 200, height: 150, float: "left", marginRight: 20, marginBottom: 10 }} />
        


            <p> To gain better understanding of the front end and back end development I have gained several online certifications from Linkedin and Microsoft Virtual Academy which could be viewed on my Linkedin profile at https: //www.linkedin.com/in/manoj-d-b5428815b/.
            Based on my 4 years of experience coupled with my Software development credentials, I believe I would make an excellent addition to your team, which will provide mutual growth.
            I am very passionate to work with you and your company because it will allow me to learn different technologies in an encouraging environment, that will keep me motivated to deliver better results.
            </p>
        
    </Layout>
    );

Gallery.propTypes = {
data:PropTypes.object.isRequired,
};

export const query = graphql`
    {
        gatsbyProfileImage: file(relativePath: {
            eq: "gatsby-facebook.png"
        }) {
            childImageSharp {
                fixed(width: 512) {
                ...GatsbyImageSharpFixed
                }
            }
        }
        gatsbymanojid: file(relativePath: {
            eq: "gatsby-manoj.png"
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