import React, { Component } from 'react'

const UserInput = (props) => {
    
    return(
        <div>
            <input text="Hello!" onChange={props.changed} />
        </div>
    )

}

export default UserInput