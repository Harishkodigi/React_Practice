import React from "react";
import ReactDOM from "react-dom/client";


const Headcomponent = () => {
    return (
        <div>
            <h1>Head Component</h1>
        </div>
        
    )
}

const number =1000
const heading = (
    <div>
       
     <Headcomponent>{number}</Headcomponent>
       {Headcomponent()}
        <h1>React Element and Jsx Element </h1>
        <input type="text" />
        <Headcomponent/>
        {<h1>{number}</h1>}
    </div>
);


console.log(heading)

const ReactElement = React.createElement("h1", {},"Heading")

console.log(<Headcomponent/>)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


