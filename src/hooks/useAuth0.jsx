import React, { useState, useEffect } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
import { Auth0Context } from '../contexts'

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname)

// Primarily from auth0 SPA quick start: https://auth0.com/docs/quickstart/spa
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [user, setUser] = useState()
  const [auth0Client, setAuth0] = useState()
  const [loading, setLoading] = useState(true)
  const [popupOpen, setPopupOpen] = useState(false)
  // const [url, setURL] = useState()

  useEffect(() => {
    // ! BELOW IS TESTING CHANGES IN REDIRECT URL
    // if (!!url === true) initOptions.redirect_uri = url && console.log('REDIRECT URL IS NOW:', initOptions.redirect_uri)
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions)
      setAuth0(auth0FromHook)

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      // * CHECK IF USER HAS ALREADY LOGGED IN, RETREIVE USER INFO IF TRUE.
      const validateAuthentication = async () => {
        await auth0FromHook.loginWithRedirect({
          appState: { targetUrl: window.location.pathname }
        })
        const user = await auth0FromHook.getUser()

        setUser(user)
      }
      // * VALIDATE IF USER IS AUTHENTICATED.
      setIsAuthenticated(isAuthenticated)

      if (!isAuthenticated) return validateAuthentication()

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()

        setUser(user)
      }

      setLoading(false)
    }
    initAuth0()
    // eslint-disable-next-line
  }, [])

  // Unused currently, but included as an option for the future
  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client.getUser()
    setUser(user)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async () => {
    setLoading(true)
    await auth0Client.handleRedirectCallback()
    const user = await auth0Client.getUser()
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
  }

  // Configure auth0 provider
  return (
    <Auth0Context.Provider
      value={{
        // setURL,
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}
