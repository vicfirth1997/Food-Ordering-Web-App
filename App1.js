//const heading = React.createElement("h1",{},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

// creating nested structure

/*
*   To create structure like:
        <div id="parent">
            <div id="child>"
                <h1>I am h1 tag</h1>
            </div>
        </div>
*/

/*const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{},"I am h1 tag")
   )
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);*/

// To create siblings with the nested structure

/**
 * 
 * To create structure like:
        <div id="parent">
            <div id="child>"
                <h1>I am h1 tag</h1>
                <h2>I am h2 tag</h2>
            </div>
        </div>
 */ 

/*const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")]
    )
);
root.render(parent);
*/

/**
 * To create multiple nested structures along with siblings in them
 * 
 * <div id="parent">
            <div id="child1>"
                <h1>I am h1 tag</h1>
                <h2>I am h2 tag</h2>
            </div>
        </div>
        <div id="parent">
            <div id="child2>"
                <h1>I am h1 tag</h1>
                <h2>I am h2 tag</h2>
            </div>
        </div>
    </div>
 * 
 * 
 * 
 */

    /*const parent = React.createElement(
        "div",{id:"parent"},[
            React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")    
            ]),
            React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"I am h1 tag"),
                React.createElement("h2",{},"I am h2 tag")    
                ])
        ]
    );
    root.render(parent);*/