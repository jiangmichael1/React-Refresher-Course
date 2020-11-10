import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click}>My name is {props.userName}!</p>
            <p>"Some random text"</p>
        </div>
    );
};

export default userOutput;