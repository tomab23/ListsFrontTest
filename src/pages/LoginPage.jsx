import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
      localStorage.setItem("log", "ok")
      navigate("/home")
    }

  return (
<div className="base-page">
<h1>Login page</h1>

<button onClick={handleLogin}>Go home</button>
</div>
  )
}

export default LoginPage
