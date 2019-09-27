import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const displayCurrentVote = (currentVote, anecdotes) => {
      const id = currentVote.id
      return [...anecdotes].filter( anecdote => anecdote.id === id)[0].content
  }

  if (props.currentVote !== "") {
    return (
      <div style={style}>
        {"you voted for "+displayCurrentVote(props.currentVote, props.anecdotes)}
      </div>
    )
  } 

  return (
    null
  )

}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    currentVote: state.currentVote
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification