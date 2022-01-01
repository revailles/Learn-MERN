import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = ({ course, total }) => {
    return (
        <div>
            <Header />
            <Part course={course} total={total} />
        </div>
    )
}

export default Course

