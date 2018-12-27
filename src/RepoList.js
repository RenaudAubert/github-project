import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';
import { ListGroup } from 'reactstrap';

const RepoList = (props) => {
  return (
    <ListGroup>
      <Repository />
    </ListGroup>
  );
};

export { RepoList as default };
