import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import RepoList from '../components/RepoList';
import { fetchRepo } from '../redux/actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRepo("RenaudAubert"));
  }

  render() {
    const { loading, error, repositories } = this.props;
    return (
      <div>
        {loading && repositories.length > 0 && (<h2 className="text-center">Loading...</h2>)}
        {error && (
          <div>
            <h2>An error occured</h2>
            <p>{error}</p>
          </div>
        )}
        {repositories.length > 0 ?
          (<Col sm="12" md={{ size: 8, offset: 1 }}>
            <RepoList repositories={repositories} />
          </Col>) :
          <h2 className="text-center">No repositories found.</h2>
        }
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  repositories: PropTypes.array.isRequired,
  error: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  const { user, loading, repositories, error } = state;
  return { user, loading, repositories, error};
};

export default connect(mapStateToProps)(App);
