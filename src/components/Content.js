import react from 'react'
import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part part={props.part} exercise={props.exercise} />
        </>
    )
}

export default Content