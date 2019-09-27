import React from 'react';
import { addToVote } from '../reducers/anecdoteReducer'
import { toggleCurrentVote } from '../reducers/notificationReducer'
import { removeNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

function AnecdoteList(props) {
    console.log(props.anecdotes)

    const vote = (id) => {
    console.log('vote', id)
    props.addToVote(id)
    props.toggleCurrentVote(id)
    setTimeout(() => {
        props.removeNotification()
      }, 5000)
    }


    return (
        <div>
        <h2>Anecdotes</h2>
            {props.anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    addToVote,
    toggleCurrentVote,
    removeNotification
  }

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
