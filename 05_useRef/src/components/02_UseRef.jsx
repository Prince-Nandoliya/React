import React, { useRef } from 'react'

const UseRef_02 = () => {


    const inputRef = useRef(null)


    const handlevalue = () => {
        console.log(inputRef)
    }


  return (
    <>
    
    <input type="text" ref={inputRef} placeholder='Enter your name' />

    <button onClick={handlevalue}>value</button>
    
    </>
  )
}

export default UseRef_02
