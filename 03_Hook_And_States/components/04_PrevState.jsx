import { useState } from "react";

const PrevState_04 = () => {
  const [input, setInput] = useState("");

  const [user, setUser] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();

    setUser((prev) => [...prev, input]);
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">add user</button>
      </form>

      <ul>
        {user.map((u) => {
          return <li>{u}</li>;
        })}
      </ul>
    </>
  );
};


export default PrevState_04