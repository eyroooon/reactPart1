import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//main App component
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))//create zero-filled array base on the size of anecdote lenght

  //Function for useState variables
  const hadleSelected = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))//random number base on the anecdote length
  }

  const handleVotes = () => {
    let newVotes = [...votes
    ]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log(newVotes)
    console.log(votes)
  }

  const AOD = votes.indexOf(Math.max(...votes))

  //rendered output
  return (
    <div>
      <h1>Anecdote of  the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br />
      <button onClick={handleVotes}>Votes</button>
      <button onClick={hadleSelected}>Next Anecdote </button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[AOD]}</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)