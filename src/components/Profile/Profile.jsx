import React, { useState } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import loader from '../../assets/loading.svg'

import Loading from '../Loading/Loading'
import { useAuth0 } from '../../contexts'

import Highlight from 'react-highlight'
import 'highlight.js/styles/monokai-sublime.css'

const Profile = ({ apiKey, setApiKey }) => {
  const { loading, user, getTokenSilently } = useAuth0()
  const [keyLoading, setKeyLoading] = useState(false)

  const getApiKey = async () => {
    try {
      setKeyLoading(true)
      const token = await getTokenSilently()

      const { sub } = user

      const response = await axios.post(
        'https://sauti-africa-market-master.herokuapp.com/api/apikeyRoute/private',
        { id: sub },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setApiKey(response.data.key)
      setKeyLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  if (loading || !user) {
    return <Loading />
  }

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
        <Col md>
          <h2>API Key</h2>
          {!apiKey ? (
            <p>
              Your API key will only be accessible for your current session. If
              you are a new user or need a replacement, please request one and
              then save it somewhere safe.
            </p>
          ) : null}
          {apiKey ? (
            <p>
              Here is your API key. It will only be accessible for your current
              session. Please save it somewhere safe.
            </p>
          ) : null}
          {keyLoading ? <img src={loader} alt="Loading" /> : null}
          {apiKey ? <h3>{apiKey}</h3> : null}
          {!apiKey && !keyLoading ? (
            <button onClick={getApiKey}>Get API Key</button>
          ) : null}
        </Col>
      </Row>
      <Row>
        <Highlight className="JSON">{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  )
}

export default Profile
