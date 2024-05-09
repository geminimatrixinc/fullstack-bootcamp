import React from 'react';


function Greeter() {

    const handleClick = function () {
        console.log('click')
    }

    const handleSwipe = function () {
        console.log('swipe')
    }
    
    var message = "good bye";

    if (true) {
        message = "hello again!"
    }


    // render...
    return <div>
            <h2>Hello, React! {message}</h2>
        </div>
}

export default Greeter;