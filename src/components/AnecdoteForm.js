import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'

function AnecdoteList(props) {

    const newAnecdote = (e) => {
        e.preventDefault()
        let content = e.target.anecdote.value
        e.target.anecdote.value = ""
        props.store.dispatch(
          createAnecdote(content)
        )
    }
    
    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={newAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
        </form>
        </div>
    );
}

export default AnecdoteList
