import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faBook, faTable } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <main>
      <div>
        <div className="services">
          <div className="service-one">
            <p className="service-icon">
              <FontAwesomeIcon icon={faServer} style={{ marginRight: '5px' }} />
              API
            </p>
            <p>
              Node + Express server providing JSON responses and appropriate
              error messages. Simple endpoints filterable via query strings.
            </p>
          </div>
          <div className="service-two">
            <p className="service-icon">
              <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px' }} />
              Docs
            </p>
            <p>
              Quickstart Guide and Reference available for API and pivot table.
              Integrated playgrounds for multiple endpoints.
            </p>
          </div>
          <div className="service-three">
            <p className="service-icon">
              <FontAwesomeIcon icon={faTable} style={{ marginRight: '5px' }} />
              Table
            </p>
            <p>
              Data extraction interface allowing for filtering. Ability to
              convert price data to selected currency. Ability to download data
              as CSV.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
