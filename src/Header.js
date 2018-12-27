import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <Navbar color="light" light>
      <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
      <Nav><SearchBar /></Nav>
    </Navbar>
  );
};

export { Header as default };
