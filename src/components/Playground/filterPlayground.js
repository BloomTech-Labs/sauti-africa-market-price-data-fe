import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import useGetToken from "../../hooks/useGetToken";
import axios from "axios";
import Highlight from "react-highlight";
import { Button, Input, Label } from "semantic-ui-react";
import "highlight.js/styles/monokai-sublime.css";
export default function FilterPlayground() {
  const [userAnswer, setUserAnswer] = useState({ url: "" });
  const [data, setData] = useState([]);
  const [bad, setBad] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [token] = useGetToken();
  const handleChange = e => {
    e.preventDefault();
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    setUserAnswer({ ...userAnswer, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e, value) => {
    e.preventDefault();
    makeCall(value);
    setDisabledBtn(true);
    setTimeout(() => setDisabledBtn(false), 10000);
  };
  const clearUrl = e => {
    e.preventDefault();
    setUserAnswer({ url: "" });
  };
  function makeCall(value) {
    axiosWithAuth([token])
      .get(`https://sauti-africa-market-master.herokuapp.com/sauti/?${value}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(error => {
        console.log(error.message);
        setBad(true);
        setErrorMessage(error.message);
      });
  }
  // useEffect(()=> {
  //   makeCall()

  // },[])
  return (
    <div className="playground">
      <form className="playForm">
        <Label as="a" basic color="violet">
          sauti/developer/filter/?
        </Label>
        <Input
          className="playURL"
          name="url"
          type="text"
          value={userAnswer.url}
          onChange={handleChange}
        />
        <Button onClick={e => clearUrl(e)}>Clear URL</Button>
      </form>
      <small>pagination disabled for playground</small>
      <div>
        <Button
          className="playBtn"
          disabled={disabledBtn}
          onClick={e => handleSubmit(e, userAnswer.url)}
        >
          make your call!
        </Button>
      </div>
      {data[0] && !bad ? (
        data.map(entry => {
          return (
            <>
              <Highlight className="JSON">
                {JSON.stringify(entry, null, 2)}
              </Highlight>
            </>
          );
        })
      ) : (
        <Highlight>{errorMessage}</Highlight>
      )}
    </div>
  );
}
