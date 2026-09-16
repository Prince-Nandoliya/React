import React, {useRef}from 'react'

const UseRef_01 = () => {

    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()
    }



  return (
    <>
    <h1>UseRef</h1>
    <input type="text" placeholder='Enter your Name' ref={inputRef}  />
    <br /><br />

    <button onClick={handleFocus}>Click</button>
    
    </>
  )
}

export default UseRef_01
