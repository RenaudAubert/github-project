import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { fetchRepo } from '../redux/actions';

const SearchBar = ({ dispatch, history}) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(fetchRepo(input.value));
      history.push('/');
    }}>
      <InputGroup>
        <input ref={node => input = node} />
        <InputGroupAddon addonType="append">
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
const SearchBarWithRouter = withRouter(SearchBar);

export default connect()(SearchBarWithRouter);
