import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import SearchBar from '../containers/SearchBar';

const Header = () => (
  <Navbar color="light" light>
    <Link to="/" className="font-weight-bold">
      Home
    </Link>
    <Nav className="mx-auto">
      <SearchBar />
    </Nav>
  </Navbar>
);

export default Header;
