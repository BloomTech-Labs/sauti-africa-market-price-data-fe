import { useState, useEffect } from 'react'
import { useAuth0 } from '../contexts'

// Fetches the access token from auth0 without having to call all this code in each file.
function useGetToken() {
  const [token, setToken] = useState(null)

  const { getTokenSilently } = useAuth0()

  useEffect(() => {
    const fetchToken = async () => {
      const result = await getTokenSilently()
      setToken(result)
    }
    fetchToken()
  })

  return [token]
}

export default useGetToken
