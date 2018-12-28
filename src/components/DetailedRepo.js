import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DetailedRepo = (props) => {
  const { name, fullname, description, avatar } = props.repository;

  return (
    <Card>
      <CardImg top src={avatar + "&s=60"} alt="github-avatar" />
      <CardBody>
        <CardTitle>{fullname || name}</CardTitle>
        <CardText>{description || "N/A"}</CardText>
      </CardBody>
    </Card>
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
