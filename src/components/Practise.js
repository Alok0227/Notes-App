import React from "react";

// Function based components which return the react component and they are literally JavaScript 
// functions.
// export default function Practise(props) {
//     return (
//         <h1>Welcome {props.myInfo.name}</h1>
//     )
// }

// Class based components -->
// We have demonstrated E6 classed to define class based components.
// export default class Practise extends React.Component{
//     render(){
//         return(
//         <h1>Welcome</h1>
//         )
//     }
// }

// export default function Practise(props){
//     return (
//         <h1>Welcome {props.name}</h1>
//     )
// }

// let elems = REACTDOM.createroot(document.getElementById('root'))
// let name = <Practise name = "Alok"/>
// root.render(name)

// Let’s recap what happens in this example:

// We call root.render() with the <Welcome name="Sara" /> element.
// React calls the Welcome component with {name: 'Sara'} as the props.
// Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.
// let elems = REACTDOM.createroot(document.getElementById('root'))

export default function clock(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Its {(new Date()).toLocaleTimeString()}</p>
        </div>
    )
}

setInterval(clock,1000);
