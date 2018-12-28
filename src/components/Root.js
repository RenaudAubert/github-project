import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Navbar, Nav, NavbarBrand } from 'reactstrap';
import App from '../containers/App';
import GetRepo from '../containers/GetRepo';
import SearchBar from '../containers/SearchBar';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container>
        <Navbar color="light" light>
          <NavbarBrand href="#">Home</NavbarBrand>
          <Nav className="mx-auto">
            <SearchBar />
          </Nav>
        </Navbar>
        <br />
        <Route exact path="/" component={App} />
        <Route path="/:id" component={GetRepo} />
      </Container>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
