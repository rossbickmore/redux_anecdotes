import React from 'react'

const Notification = (props) => {

  const { currentVote, anecdotes } = props.store.getState()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const displayCurrentVote = (id, anecdotes) => {
    if ( currentVote === "") { 
      return "NA"
    } else {
      const id = currentVote.id
      return [...anecdotes].filter( anecdote => anecdote.id === id)[0].content
    }
  }

  return (
    <div style={style}>
      you voted for {displayCurrentVote(currentVote, anecdotes)}
    </div>
  )
}

export default Notification