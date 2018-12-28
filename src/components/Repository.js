import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';

const Repository = (props) => {
  const { id, name, fullname, watchers, language } = props.repository;

  return (
    <div>
      <Row>
        <Col>
          <Link to={"/" + id} className="font-weight-bold">
            {name}
          </Link>
        </Col>
        <Col>{fullname && "Fullname: " + fullname}</Col>
      </Row>
      <Row>
        <Col>Watchers: {watchers}</Col>
        <Col>Language: {language}</Col>
        <Col xs="1">
          <Link to={"/" + id} >
            <i className="fas fa-plus-square fa-2x"></i>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    fullname: PropTypes.string,
    watchers: PropTypes.number,
    language: PropTypes.string,
    description: PropTypes.string,
    avatar: PropTypes.string
  })
}

export default Repository;
