import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  );
};

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <table>
        <tbody>

          <Statistic text='good' value={props.clicks.good} />
          <Statistic text='neutral' value={props.clicks.neutral} />
          <Statistic text='bad' value={props.clicks.bad} />
          <Statistic text='all' value={props.all} />
          <Statistic text='average' value={props.avg} />
          <Statistic text='positive' value={props.positive + " %"} />
        </tbody>

      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })


  const handleSetGood = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleSetNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)

  }

  const handleSetBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)

  }

  const all = clicks.bad + clicks.good + clicks.neutral
  const average = (clicks.good - clicks.bad) / all
  const avg = isNaN(average) ? 0 : average
  const positive = all === 0 ? 0 : clicks.good / all * 100

  return (
    <div>
      <Header text='give feedback' />
      <button onClick={handleSetGood}>Good</button>
      <button onClick={handleSetNeutral}>Neutral</button>
      <button onClick={handleSetBad}>Bad</button>
      <Header text='statistic' />
      <Statistics clicks={clicks} avg={avg} all={all} positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)