import { googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const currentProfile = localStorage.getItem('user')

    const AutoLogin = () => {
      if (currentProfile) {
        setProfile(JSON.parse(currentProfile))
      }
    }
    AutoLogin()
  }, [])

  const success = (response) => {
    const decoded = jwtDecode(response.credential)
    setProfile(decoded)

    localStorage.setItem('user', JSON.stringify(decoded))
    navigate("/")
  }

  const errorMessage = (error) => {
    console.log(error)
  }

  const logOut = () => {
    googleLogout()
    setProfile(null)
    localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{ profile, success, errorMessage, logOut }}>
      {children}
    </UserContext.Provider>
  )
}
