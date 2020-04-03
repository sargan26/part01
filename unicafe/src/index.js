import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistic = (props) => {
  return (

    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Statistics = (props) => {
  if (props.total > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <tr>
              <td>average</td>
              <td>{(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{props.good * 100 / (props.good + props.neutral + props.bad)} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <Button handleClick={props.handleGood} text="good" />
      <Button handleClick={props.handleNeutral} text="neutral" />
      <Button handleClick={props.handleBad} text="bad" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)