import React from "react";
import ReactDOM from "react-dom/client";


// const jsxheading=<h1 id="heading">Namaste React</h1>

const Title=()=>(
    <h1 className="head">Different Component</h1>
)



// React Functional Component
// Component Composition
const Heading=()=>(
    <div id="container">
        <Title/>
     <h1 className="heading">Namaste React by Functional Component</h1>
     </div>
)
 const root= ReactDOM.createRoot(document.getElementById("root"));

 root.render(<Heading/>);
 