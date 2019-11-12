import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import useGetToken from '../../hooks/useGetToken'
import axios from 'axios'
import Highlight from 'react-highlight'
import "highlight.js/styles/monokai-sublime.css"
 export default function Playground(){
    const [userAnswer, setUserAnswer] = useState({url: ""})
    const [data, setData] = useState([])
    const [token] = useGetToken()
    const handleChange = e => {e.preventDefault()
        console.log('e.target.name', e.target.name)
        console.log('e.target.value', e.target.value)
        setUserAnswer({...userAnswer, [e.target.name]: e.target.value})
    }
    function makeCall (){
        axios
        .get(`http://localhost:8888/sauti/`)
        .then(res => {
            console.log(res)
            setData(res.data.records)
        })
        .catch(err => {
            console.log(err.message)
        })

    }
    useEffect(()=> {
      makeCall()

    },[])
    return(
        <>
        <form>
            <input 
            name='url'
            type='text'
            value={userAnswer.url}
            onChange={handleChange}
            />
        </form>
        <button>make your call!</button>
        {data ? data.map(entry => {
            return (
                <>
                    <Highlight className="JSON">{JSON.stringify(entry, null, 2)}</Highlight>
                </>
            )
        }): <div>done messed up</div>

        }
            
        


        </>

    )
}
