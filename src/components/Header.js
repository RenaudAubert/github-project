import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'reactstrap';
import SearchBar from '../containers/SearchBar';

const Header = () => (
  <Navbar color="light" light>
    <Link to="/" className="font-weight-bold text-dark">
      <i className="fas fa-home fa-2x"></i>
    </Link>
    <Nav className="mx-auto">
      <SearchBar />
    </Nav>
  </Navbar>
);

export default Header;
