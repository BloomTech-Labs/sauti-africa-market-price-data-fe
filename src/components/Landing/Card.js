
import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const TopCard = (props) => {
  return (
    <div>
      <Card >
        <CardBody className='top-cardbody'>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
        <Button className="TopCardButton">Learn More</Button>
      </Card>
   
    </div>
  );
};

export default TopCard;