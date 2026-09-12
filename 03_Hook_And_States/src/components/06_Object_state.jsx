import React, { useState } from "react";

const Object_state = () => {
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (field,e) => {
    setInput({
        ...input,
        [field]: e.target.value,
    })
  }

  return (
    <>
      <h1>ObjectStaes</h1>

      <input type="text" placeholder="Enter Name" value={input.Name}  onChange={(e)=> handleChange("Name",e)}/>
      <br /><br />
      <input type="Email" placeholder="Enter Email" value={input.Email} onChange={(e) => handleChange("Email",e)} />
      <br /><br />
      <input type="password" placeholder="Enter Password" value={input.Password} onChange={(e) => handleChange("Password",e)} />
      <br /><br />
      <h1>Name:- {input.Name}</h1>
      <h1>Email:- {input.Email}</h1>
      <h1>Password:- {input.Password}</h1>
    </>
  );
};

export default Object_state;
