import React from 'react'

const Body = ({ text, value, header }) => {
    return (
        <>
            <h4>{header}</h4>
            <p>{text} {value} </p>
        </>
    )
}

export default Body
