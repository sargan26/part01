import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(new Array(6).fill(0))
//   const [mostUpvoted, setMostUpvoted] = useState(0)


//   return (
//     <div>
//       <h1>Anecdote of the day</h1>
//       {props.anecdotes[selected]}
//       <br />
//       has {votes[selected]} votes
//       <br />
//       <button onClick={() => {
//         const votesCopy = [...votes]
//         votesCopy[selected] = votesCopy[selected] + 1
        
//         // {console.log(votes)}
//         // {console.log(Math.max(...votes))}
//         // {console.log(mostUpvoted)}
//         setVotes(votesCopy)
//         setMostUpvoted(votes.indexOf(Math.max(...votes)))
//         console.log(Math.max(...votes))
//       }
//       }>vote</button>
//       <button onClick={() => {
//         setSelected(Math.floor(Math.random() * 6))
//         setMostUpvoted(votes.indexOf(Math.max(...votes)))
//         }}>new anecdote</button>
//       <h1>Anecdote with most votes</h1>
//       <p>{props.anecdotes[mostUpvoted]}</p>
//     </div>
//   )
// }



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  const handleClick = () => {
  setSelected(Math.round(Math.random()*5))
  }

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] = votes[selected] + 1
    setVotes(votesCopy)
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {props.anecdotes[selected]}
      <br/>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>

      <h3>Anecdote with most votes</h3>
      {props.anecdotes[votes.indexOf(Math.max(...votes))]}
      <br/>
      <div>has {Math.max(...votes)} votes</div>
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