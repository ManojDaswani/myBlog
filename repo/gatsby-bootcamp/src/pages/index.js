import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import '../utils/fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ButtonLink from "../components/button"
// import {FaCcVisa } from "react-icons/fa";
// import {MdDashboard} from "react-icons/md"
// import { IoIosCart, IoIosCash} from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
// import toggleFunction from './toggleFunction'
// import { Button, Alert } from 'reactstrap';

const IndexPage = () => (
  <Layout>
  <meta name = "viewport" content = "width=device-width, initial-scale=1"/>
    <SEO title="Home" />
    {/* <MdDashboard /> */}
   
    {/* <input type = "checkbox" /> */}
    {/* <span className="slider round"> </span> */}
    {/* <button onClick={toggleFunction}>Toggle dark mode</button> */}
 
  {/* <ul>
      <li> <a className = "active"href = "/"> Home </a></li>
      <li> <Link to = "/about/"> About us </Link>{" "}</li>
      <li> <a href = "page-2"> Page 2 </a></li >
      <li> <a href = "Portfolio"> Portfolio </a></li>
      <li> <a href = "gallery"> Gallery </a></li>
  </ul> */}
{/* <div className="navbar">
        <AniLink fade to="about" >About </AniLink>{" "}
        <AniLink fade to="page-2">Page 2 </AniLink>{" "}
        <AniLink fade to="Portfolio">Portfolio </AniLink>{" "}
        <AniLink fade to="gallery">Gallery </AniLink>{" "}
        <AniLink fade to="photos"> Photos </AniLink>{" "}
        <AniLink fade to="using-typescript">Using Typescript</AniLink>
</div>  */}
    
    <h2> Hello!! <span role="img" aria-label="Cool hand emoji">✌🏼</span><br /><br />I'm <span className="text">Daswani </span></h2>
    
    {/* <span role = "img"
      aria-label="Snowman"> &#9731;</span>
    <span role="img" aria-label="Cool hand emoji">✌🏼</span> */}

  {/* <div style = {
    {maxWidth: `300`, marginBottom: `1.45rem`}
  }> */}
        {/* <Image/>
      <FaCcVisa />
      <FontAwesomeIcon icon="coffee" /> */}
      
      {/* <p><span className="class other-class" id="anything" data-another="example">Here is the food preparation</span></p> */}

      {/* <p> Add the <span className="ingredient"> basil </span>, <span className="ingredient" > pine nuts </span> and <span className="ingredient"> garlic </span> to a blender and blend into a paste. </p> */}
      


      {/* <p> Gradually add the <span className="ingredient"> olive oil </span> while running the blender slowly.</p > */}

      

        {/* <IoIosCart />
      <IoIosCash /> */}
      
      {/* <FontAwesomeIcon icon="coffee" /> */}

        {/* <ButtonLink to = {'/the-moon'}
      text={'The Moon'} icon={'coffee'} /> */}
      {/* <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
    <button type="button" className="btn btn-success">Success</button> */}
    {/* <Alert color="primary">
        This is a primary alert — check it out!
      </Alert> */}

  {/* </div>  */}
  <br/>
    <br />
    

  </Layout>
)

export default IndexPage