import React from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'

const TopCard = props => {
  return (
    <>
      <Card>
        <CardBody className="top-cardbody">
          <CardTitle>
            Public facing API serving Sauti Africa's market price data
          </CardTitle>
          <CardText>
            Up-to-date daily prices for about 100 products across 60
            marketplaces in East Africa
          </CardText>
        </CardBody>
        <Button className="TopCardButton">Learn More</Button>
      </Card>
    </>
  )
}

export default TopCard
