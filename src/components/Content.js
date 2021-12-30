import React from 'react'
import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part part={props.course[0]} />
            <Part part={props.course[1]} />
            <Part part={props.course[2]} />
        </>
    )
}

export default Content