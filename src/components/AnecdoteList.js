import React from 'react';
import { addToVote } from '../reducers/anecdoteReducer'
import { toggleCurrentVote } from '../reducers/notificationReducer'

function AnecdoteList(props) {
    const anecdotes = props.store.getState().anecdotes
    console.log(anecdotes)

    const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch(
        addToVote(id)
    )
    props.store.dispatch(
        toggleCurrentVote(id)
    )
    }


    return (
        <div>
        <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
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


export default AnecdoteList
