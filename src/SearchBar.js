import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

export default class SearchBar extends Component {
  render() {
    return (
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
