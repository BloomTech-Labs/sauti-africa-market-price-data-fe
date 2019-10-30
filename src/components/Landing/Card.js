
import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const TopCard = (props) => {
  return (
    <>
      <Card >
        <CardBody className='top-cardbody'>
          <CardTitle>Card title</CardTitle>
          <CardText>Pokem ipsum dolor sit amet Mime Jr Voltorb Tranquill Koffing Goldeen Audino. Pikachu Granbull Magmortar Bastiodon Pokemon 4Ever Missingno Fog Badge. Thundershock Earth Badge Duskull Lileep Ambipom Doduo Poliwhirl. Boulder Badge Rainbow Badge Cubone Simipour Corsola Ninetales Sigilyph. Soul Badge Solosis Luvdisc Gigalith Ice in a world we must defend Rampardos.</CardText>
        </CardBody>
        <Button className="TopCardButton">Learn More</Button>
      </Card>
   
    </>
  );
};

export default TopCard;