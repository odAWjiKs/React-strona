import React from 'react';

const Today = () => {
    return (
        <div>
            {new Date().toLocaleDateString()}
        </div>
    );
};

export default Today;