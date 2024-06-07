import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="184444512101-pstceg9f5d4sfne390ud5f4igi5103vu.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
