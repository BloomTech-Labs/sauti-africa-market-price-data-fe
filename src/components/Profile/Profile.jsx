
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import Loading from "../Loading/Loading";
import { useAuth0 } from "../../contexts";

import Highlight from "react-highlight";
import "highlight.js/styles/monokai-sublime.css";

const Profile = () => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [apiKey, setApiKey] = useState();

  useEffect(() => {
    const getApiKey = async () => {
      try {
        const token = await getTokenSilently();

        const {sub} = user

        const response = await axios.post(
          "https://sauti-africa-market-master.herokuapp.com/api/apikeyRoute/private", {id: sub},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        console.log(response);
        setApiKey(response.data.key);
      } catch (error) {
        console.log(error);
      }
    };
    if (!apiKey) {
      getApiKey();
    }
  }, [apiKey, getTokenSilently, user]);

  if (loading || !user) {
    return <Loading />;
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
          <h2>{apiKey}</h2>
        </Col>
      </Row>
      <Row>
        <Highlight className="JSON">{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
};

export default Profile;
