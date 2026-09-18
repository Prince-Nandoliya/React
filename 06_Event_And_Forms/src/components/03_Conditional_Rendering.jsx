import React, { useState } from 'react'

const Conditional_Rendering_03 = () => {

    const [color,setColor] = useState("")

    let signals;

    if(color === "red"){
        signals = <h1 style={{ color : "red"}}>you have selected red color</h1>
    }else if(color === "yellow"){
        signals = <h1 style={{ color : "yellow"}}>you have selected yellow color</h1>
    }else if(color === "green"){
        signals = <h1 style={{color : "green"}}>you have selected green color</h1>
    }else if(color === ""){
        signals = <h1>selecte color first</h1>

    }else {
        signals = <h1>you have selected worg color</h1>
    }

  return (
    <>
    <form>
        <input type="text" placeholder='enter color'value={color}  onChange={(e) => setColor(e.target.value)}/>
    </form>
    {signals}



    </>
  )
}

export default Conditional_Rendering_03
