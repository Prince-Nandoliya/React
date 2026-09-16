import React, { useRef } from 'react'

const UseRef_03 = () => {

    const name = useRef("")

    const handlesubmit = (e) => {
        e.preventDefault();

        console.log("name",name.current.value)
    }


  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" placeholder='enter your name' ref={name} />
        <button type='submit'>add</button>
    </form>

    </>
    
  )
}

export default UseRef_03
