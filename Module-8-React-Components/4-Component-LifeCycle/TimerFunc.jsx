import { useEffect } from 'react';

function TimerFunc() {
    
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component will unmount');
        };
    }, []); // Empty dependency array ensures 
            // this runs only on mount/unmount

    return <p>Timer is running...</p>;
}

export default TimerFunc;
