// Controlled Components:
// Controlled components are those where the form data is handled by the React component’s state.

import { useState } from 'react';

const ControlledComponentExample = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {

        setInputValue(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
              
                onChange={handleChange}
            />
            <p>Input Value: {inputValue}</p>
        </div>
    );
};

export default ControlledComponentExample;
