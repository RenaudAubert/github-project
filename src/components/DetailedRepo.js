import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';

const DetailedRepo = (props) => {
  const {
    name,
    fullname,
    description,
    avatar,
    watchers
  } = props.repository;

  const back = e => {
    e.stopPropagation();
    props.history.goBack();
  };

  return (
    <div>
      <Button onClick={back}>
        <i className="fas fa-arrow-circle-left"></i>
      </Button>
      <div className="border mt-4">
        <Row>
          <Col>
            <p className="font-weight-bold">{name}</p>
          </Col>
          <Col>{fullname && "Fullname: " + fullname}</Col>
        </Row>
        <Row>
          <Col>
            <img src={`${avatar}&s=48`} alt="Github-Avatar" className="img-thumbnail w-25" />
          </Col>
          <Col>
            {description || "Description N/A"}
            <p>Watchers: {watchers}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

DetailedRepo.propTypes = {
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

export default DetailedRepo;
