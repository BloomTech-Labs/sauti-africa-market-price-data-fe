import React from 'react'
import { useAuth0 } from '../../contexts'
import axios from 'axios'
import './UserRoles.scss'

const UserRoles = () => {
  const { user } = useAuth0()

  const updateUserRole = (userId, user) => {
    axios
      .put(`https://sauti-africa-market-staging-3.herokuapp.com/api/users/${userId}`, user)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function handlePaidUser(e) {
    e.preventDefault()
    const paidUser = {
      app_metadata: {
        role: 'paidUser'
      }
    }
    console.log('Paid User =>')
    updateUserRole(user.sub, paidUser)
  }

  function handleFreeUser(e) {
    e.preventDefault()
    const freeUser = {
      app_metadata: {
        role: 'freeUser'
      }
    }
    console.log('Free User =>')
    updateUserRole(user.sub, freeUser)
  }

  return (
    <div>
      <h3 className="plan">Select Your Plan</h3>
      <div className="wrapper">
        <ul className="cards">
          <li className="cards__item">
            <div className="card">
              <div className="card__content">
                <div className="card__title">Free</div>
                <p className="card__text">
                  Rate-limited to 10k API calls/month
                </p>
                <p className="card__text">7 days of historical data</p>
                <button className="btn" onClick={handleFreeUser}>
                  Select Plan
                </button>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__content">
                <div className="card__title">Unlimited</div>
                <p className="card__text">Unlimited API calls/month</p>
                <p className="card__text">
                  restricted to 2 years of historical data
                </p>
                <button className="btn" onClick={handlePaidUser}>
                  Select Plan
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserRoles