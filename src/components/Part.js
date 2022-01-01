import React from 'react'

const Part = ({ course, total }) => {
    return (
        <div>   
            <ul>
                {course.parts.map((part) => {
                    console.log(part)
                    return(
                        <li key={part.id}>{part.name} {part.exercises}</li>
                )})}
                <li>Total Exercise = {total}</li>
            </ul>
        </div>
    )
}

export default Part
