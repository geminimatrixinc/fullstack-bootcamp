import { useEffect } from 'react';

function TimerFunc() {
    
    const componentLoaded = () => {


        console.log('Func Component mounted');

        return () => {
            console.log('Func Component will unmount');
        }
    }

    // component mounted..
    // ====> componentDidMount()
    // ====> componentDidUnMount()
    
    useEffect(componentLoaded, []); // Empty dependency array ensures this runs only on mount/unmount


    return <p>Timer is running...</p>;
}

export default TimerFunc;
