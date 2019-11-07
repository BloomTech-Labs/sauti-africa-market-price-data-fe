import React from 'react'

import Grid from '../Grid'
import Hero from '../Hero'

import useGetToken from '../../hooks/useGetToken'

const GridPage = (props) => {
  const [token] = useGetToken()

  return (
    <div className="next-steps my-5">
      {token ? <Grid /> : <Hero/>}
    </div>
  )
}

export default GridPage
