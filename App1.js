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
        <Fn1></Fn1>
        {Fn1()}
    <h1>Inside another Functional Component</h1>
    <h2>{number}</h2>
    <h3>{reactElement}</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fn2/>);

// a JSX expression can have only parent element
// eg-> 
// (<div></div> <div></div>) will not be allowed
//  instead (<div> <div></div></div>) will actually work

// React Fragments -> an empty tag
// <React.Fragment> <div></div> <div></div>    <React.Fragment> will work
// Or <> <div></div> <div></div> </> will also work