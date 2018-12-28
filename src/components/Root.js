import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import App from '../containers/App';
import GetRepo from '../containers/GetRepo';
import Header from './Header';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Container>
          <br />
          <Route exact path="/" component={App} />
          <Route path="/:id" component={GetRepo} />
        </Container>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
