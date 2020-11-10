import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>My name is {props.userName}!</p>
            <p>"Some random text"</p>
        </div>
    );
};

export default userOutput;