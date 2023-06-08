import React from "react";
import  ReactDOM  from "react-dom/client";

// React Element using Core React

/*const heading = React.createElement(
    "h1",{id:"heading"},
    "Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

//  React element using JSX
// JSX is not html inside JS.
// it is HTML like syntax

const jsxHeading=<h1 id="heading">Heading using JSX</h1>;
// jsxHeading is also a react element(an object)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// JSX is transpiled to React.createElement =>ReactElement-JS object => HTMLELEMENT(render).
// Parcel=>to Babel for transpiling the JSX code to ECMAscript.