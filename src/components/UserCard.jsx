import React from 'react';

const UserCard = ({name, age}) => {
    return (
        <div>
            <h1>Hello {name}!!!!!</h1>
            <h3>Lat {age}</h3>
        </div>
    );
};

export default UserCard;