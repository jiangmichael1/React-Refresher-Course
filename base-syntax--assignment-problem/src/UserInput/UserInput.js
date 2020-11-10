import React from 'react';

const userInput = (props) => {
    return( <input text="Hello!" onChange={props.changed} value={props.name} /> );
}

export default userInput;