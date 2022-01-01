import React from 'react'
import Course from './components/Course'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const totalExercises = course.parts.map((part) => part.exercises).reduce((prev, cur) => { return prev + cur})

  console.log(totalExercises);

  return (
    <>
          <Course course={course} total={totalExercises} />
    </>
  )
}

export default App