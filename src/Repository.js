import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Row, Col } from 'reactstrap';

const Repository = (props) => {
  return (
    <ListGroupItem>
      <Row>
        <Col>Name</Col>
        <Col>FullName</Col>
      </Row>
      <Row>
        <Col>Watchers</Col>
        <Col>Language</Col>
      </Row>
    </ListGroupItem>
  );
};

export { Repository as default };
