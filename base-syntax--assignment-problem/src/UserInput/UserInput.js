import React from 'react';

const userInput = (props) => {
const style = {
    border: '2px solid blue'
};

    return( 
        <input 
            type="text" 
            onChange={props.changed} 
            value={props.name} 
            style={style}
        /> 
    );
}

export default userInput;