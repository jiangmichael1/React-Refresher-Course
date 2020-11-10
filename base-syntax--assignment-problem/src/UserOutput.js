import React, { Component } from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>My name is {props.name}!</p>
        </div>
    )
}

export default UserOutput