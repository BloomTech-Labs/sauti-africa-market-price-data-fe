import React, { useState } from 'react'
import axios from 'axios'

import Highlight from 'react-highlight'
import 'highlight.js/styles/monokai-sublime.css'

const Content = ({ apiKey }) => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)

  const apiCall = () => {
    setErr(false)
    setData([])
    axios
      .get('https://sauti-africa-market-master.herokuapp.com/sauti', {
        headers: {
          key: apiKey
        }
      })
      .then(res => {
        setData(res.data)
      })
      .catch(e => {
        console.log({ apiCallErr: e })
        setErr(true)
        setData([])
      })
  }

  return (
    <div className="next-steps my-5">
      {apiKey ? <button onClick={apiCall}>Call the api</button> : null}
      {!data[0] ? (
        err ? (
          <div>You've reached the max amount of calls!</div>
        ) : apiKey ? (
          <div>Make a call!</div>
        ) : null
      ) : (
        data.map(entry => {
          return (
            <Highlight className="JSON">
              {JSON.stringify(entry, null, 2)}
            </Highlight>
          )
        })
      )}
    </div>
  )
}

export default Content
