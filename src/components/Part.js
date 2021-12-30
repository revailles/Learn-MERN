import React from 'react'

const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p>This is {props.part.name} with a total of {props.part.exercise} exercise</p>
        </div>
    )
}

export default Part
