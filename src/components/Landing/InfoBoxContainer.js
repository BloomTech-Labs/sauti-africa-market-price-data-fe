import React from 'react'
import InfoBox from './InfoBox.js'
import './Landing.scss'

const InfoBoxContainer = () => {
  const boxOneTitle = 'Filterable Table'
  const boxTwoTitle = 'Docs'
  const boxThreeTitle = 'API'

  const boxOneContent =
    'Data extraction interface allowing for filtering by product, category, country, & date range. Ability to convert price data to a selected currency. Ability to download data as CSV. '
  const boxTwoContent =
    'Quickstart guide and reference available for API & filterable table. '
  const boxThreeContent =
    'Provides JSON response via provided endpoints. Allows to query the database via URL query object. Error Handling to understand all possible responses. '

  return (
    <div className="threeBoxes">
      <div className="infoBox">
        {/* icon place */}
        <InfoBox title={boxOneTitle} content={boxOneContent} />
      </div>
      <div className="infoBox">
        {/* icon place */}
        <InfoBox title={boxTwoTitle} content={boxTwoContent} />
      </div>
      <div className="infoBox">
        {/* icon place */}
        <InfoBox title={boxThreeTitle} content={boxThreeContent} />
      </div>
    </div>
  )
}

export default InfoBoxContainer
