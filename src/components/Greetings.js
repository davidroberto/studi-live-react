import { useState } from "react";

const Greetings = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name : </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name}
    </div>
  );
};

export default Greetings;
