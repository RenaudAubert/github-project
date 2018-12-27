import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RepoList from './RepoList';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <RepoList />
      </Container>
    );
  }
}
