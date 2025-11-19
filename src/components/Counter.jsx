import React, {useState} from 'react';

const Counter = () => {
    const [licz, setLicz] = useState(10)
    return (
        <div>
            <h3>Ilość kliknięć: {licz}</h3>
            <button onClick={() => setLicz(licz + 1)}>Zwiększ o 1</button>
        </div>
    );
};

export default Counter;