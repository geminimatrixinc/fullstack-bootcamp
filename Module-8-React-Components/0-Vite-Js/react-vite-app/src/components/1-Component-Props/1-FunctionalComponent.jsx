/* eslint-disable react/prop-types */

// Functional components are simpler and typically used in modern React applications.
//
// 1. props.name allows data to be passed from parent to child

const WelcomeFunc = (props) => {  

    const name = props.name ?  props.name : "Morning";
    return <h1>Hello, {name}!</h1>;
}


export default WelcomeFunc;