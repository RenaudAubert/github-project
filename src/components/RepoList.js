import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';
import { ListGroup, ListGroupItem } from 'reactstrap';

const RepoList = (props) => {
  const { repositories } = props;

  return (
    <ListGroup >
      {repositories.map(repo =>
        <ListGroupItem key={repo.id} className="mb-3">
          <Repository repository={repo} />
        </ListGroupItem>
      )}
    </ListGroup>
  );
};

RepoList.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default RepoList;
