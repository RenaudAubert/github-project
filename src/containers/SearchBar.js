import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { fetchRepo } from '../redux/actions';

const SearchBar = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(fetchRepo(input.value));
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

export default connect()(SearchBar);
