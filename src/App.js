import React, {useState} from 'react'
import Body from './components/Body'
import Button from './components/Button'
import Header from './components/Header'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleOnClick={handleGoodClick} text="good" />
      <Button handleOnClick={handleNeutralClick} text="neutral" />
      <Button handleOnClick={handleBadClick} text="bad" />
      <Body header="Statistic" />
      <Body value={good} text="good" />
      <Body value={neutral} text="neutral" />
      <Body value={bad} text="bad" />
    </div>
  )
}

export default App