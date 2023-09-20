 import { useState } from "react";

const User = ({name,Location,Contact}) => {

         const [count,setCount] = useState(0)

        const increment = () => {
          setCount(count +1)
        }

    return (
        <div className="user-card">
          <h1>Count:{count}</h1>
          <button onClick={increment}>Increment</button>
          <h2>Name:{name}</h2>
          <h3>Location:{Location}</h3>
          <h4>Contact:{Contact}</h4>
        </div>
    )
};


export default User;

