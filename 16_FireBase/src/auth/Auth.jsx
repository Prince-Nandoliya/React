import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const handlechange = (feild, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [feild]: e.target.value,
      };
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    console.log(input);
  };

  return (
    <>
      <h1>{isLogin ? "Sing up" : "login"}</h1>
      <div className="container">
        <form action="" onSubmit={handlesubmit}>
          <input
            type="Email"
            placeholder="Enter Email"
            value={input.Email}
            onChange={(e) => handlechange("Email", e)}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Password"
            value={input.Password}
            onChange={(e) => handlechange("Password", e)}
          />
          <br />
          <br />
          <button>{isLogin ? "Login" : "SingUp"}</button>
          <br />
          <br />
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "new user? SingUp" : "Alredy User ? Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
