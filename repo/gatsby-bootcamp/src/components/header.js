import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand,
  NavbarText } from 'reactstrap';
  import toggleFunction from '../pages/toggleFunction'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="nav navbar-dark fixed-top">
      {/* // <nav className = "navbar fixed-top" > */}
     
      <Navbar color="md-light" light expand="md">
        <NavItem>
          <AniLink fade to="/">Home</AniLink>{" "}
        </NavItem>
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
       
        <Collapse isOpen={isOpen} navbar>
           
          <Nav className="mr-auto" navbar>
            <NavItem>
              <AniLink fade to="about">About </AniLink>{" "}
            </NavItem>
              
            <NavItem>
              <AniLink fade to="page-2">Page 2 </AniLink>{" "}
            </NavItem>
            <NavItem>
              <AniLink fade to="Portfolio">Portfolio </AniLink>{" "}
            </NavItem>
            <NavItem>
              <AniLink fade to="gallery">Gallery </AniLink>{" "}
            </NavItem>
            <NavItem>
              <AniLink fade to="photos"> Photos </AniLink>{" "}
            </NavItem>
          </Nav>
          <NavbarText><button onClick={toggleFunction}>Toggle dark mode</button></NavbarText>
        </Collapse>
      </Navbar>
        
      </nav>
      
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use

}

export default Header
