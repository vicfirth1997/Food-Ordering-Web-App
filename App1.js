import React from "react";
import  ReactDOM  from "react-dom/client";

// react element inside another react element
const ele= <span> With clarity</span>;

const reactElement= (
    <p>
        A simple react Element
        {ele}
    </p>
);




// functional component
const Fn1=()=>(
    <h1>A functional Component</h1>
);

// js variable
const number=10000;

// another functional component with a js variable,another react element and another functional component inside it.
const Fn2=()=>(

    <div id="container">
        <Fn1/>
        {/* or like <Fn1></Fn1> */}
    <h1>Inside another Functional Component</h1>
    <h2>{number}</h2>
    <h3>{reactElement}</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fn2/>);