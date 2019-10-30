
import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const InfoBox = ({title, content}) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default InfoBox;