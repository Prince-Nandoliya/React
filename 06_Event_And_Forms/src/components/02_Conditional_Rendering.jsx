import React, { useState } from 'react'

const Conditional_Rendering_02 = () => {

    const [login,setLogin] = useState(false)

    const [user,setUser] = useState(false)

    const handleClick = () => {

        setLogin(!login)
        setUser(!user)
    }


  return (
    <>
    <h1>{!user ? "click to login" : "welcome user"}</h1>

    <button onClick={handleClick}>{login ? "logout" : "login"}</button>
    <br />
    <br />
    {user && "welcome"}
    
    </>
  )
}

export default Conditional_Rendering_02
