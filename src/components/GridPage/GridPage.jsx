import React from 'react'

import Grid from '../Grid'

import useGetToken from '../../hooks/useGetToken'

const GridPage = ({ apiKey }) => {
  const [token] = useGetToken()

  return (
    <div className="next-steps my-5">
      {token ? <Grid /> : 'Log in to view data'}
    </div>
  )
}

export default GridPage
