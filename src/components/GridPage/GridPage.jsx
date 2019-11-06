import React from 'react'

import Grid from '../Grid'

import useGetToken from '../../hooks/useGetToken'

const GridPage = (props) => {
  const [token] = useGetToken()

  return (
    <div className="next-steps my-5">
      {token ? <Grid list={props.list} /> : 'Log in to view data'}
    </div>
  )
}

export default GridPage
