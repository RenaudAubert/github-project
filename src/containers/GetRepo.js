import { connect } from 'react-redux';
import DetailedRepo from '../components/DetailedRepo';

const findRepoById = (repositories, id) => {
  const repo = repositories.find(repo => repo.id === id);
  return repo || {};
};

const mapStateToProps = (state, ownProps) => ({
  repository: findRepoById(state.repositories, parseInt(ownProps.match.params.id))
});

export default connect(mapStateToProps)(DetailedRepo);
