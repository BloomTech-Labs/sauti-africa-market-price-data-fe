import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import useGetToken from '../../hooks/useGetToken'
import axios from 'axios'
import Highlight from 'react-highlight'
import "highlight.js/styles/monokai-sublime.css"
 export default function DrPlayground(){
    const [userAnswer, setUserAnswer] = useState({url: 'product=yellow%20beans&startDate=2019-01-01&endDate=2019-10-28'})
    const [data, setData] = useState([])
    const [bad, setBad] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [token] = useGetToken()
    const handleChange = e => {e.preventDefault()
        console.log('e.target.name', e.target.name)
        console.log('e.target.value', e.target.value)
        setUserAnswer({...userAnswer, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e, value) => {
        e.preventDefault()
        makeCall(value)
        
    }
    const clearUrl = (e) =>{
        e.preventDefault()
        setUserAnswer({url: ''})
    }
    function makeCall (value){
        axiosWithAuth([token])
      
        .get(`http://localhost:8888/sauti/client/playground/date?${value}`)
        .then(res => {
            console.log(res)
            setData(res.data)
        })
        .catch(error => {
            console.log(error.message)
            setBad(true)
            setErrorMessage(error.message)

        })

    }
    // useEffect(()=> {
    //   makeCall()

    // },[])
    return(
        <>
        <form>
            http://localhost:8888/sauti/client/playground/date?
            <input 
            name='url'
            type='text'
            value={userAnswer.url}
            onChange={handleChange}
            />
        </form>
        <button onClick={ e => handleSubmit(e, userAnswer.url)}>make your call!</button>
        <button onClick={(e)=> clearUrl(e)}>Clear URL</button>
        {data[0] && !bad ? data.map(entry => {
            return (
                <>
                    <Highlight className="JSON">{JSON.stringify(entry, null, 2)}</Highlight>
                </>
            )
        }):  <Highlight>{errorMessage}</Highlight>

        }
        </>
    )
}