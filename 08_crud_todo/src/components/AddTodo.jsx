import React, { useState } from 'react'

const AddTodo = () => {

    const [input,setInput] = useState({
        Task:"",
        Description:""
    })


    const handleChnge = (feild,e) => {
        setInput((prev)=>{
            return{
                ...prev,
                [feild]:e.target.value
            }
        })
    }

    console.log("input",input)

    const handlesubmit = () => {
        e.preventDefault();

        setInput({Task:"",Description:""})
    }

  return (
    <form action="">
        <input type="text" placeholder='Enter Task' value={input.Task}  onChange={(e) => handleChnge("Task",e)}/>
        <br /><br />
        <input type="text" placeholder='Enter Description' value={input.Description} onChange={(e) => handleChnge("Description",e)} />
        <br /><br />
        <button type='submit'>add</button>
    </form>
  )
}

export default AddTodo




