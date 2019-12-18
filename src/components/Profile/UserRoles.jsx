import React, {useEffect, useState}from 'react'
import { useAuth0 } from '../../contexts';
import axios from 'axios';

const UserRoles = () => {
  const { user } = useAuth0()
  console.log(user)
  useEffect(() => {
    axios
      .post('http://localhost:8888/api/users', user)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  })


 
  return ( 
    <></>
   );
}
 
export default UserRoles;