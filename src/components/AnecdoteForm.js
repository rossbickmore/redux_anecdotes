import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

function AnecdoteForm(props) {

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        console.log("content", content)
        e.target.anecdote.value = ""
        const newAnecdote = await anecdoteService.createNew(content)
        props.createAnecdote(newAnecdote)
    }
    

    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
        </form>
        </div>
    );
}




export default connect(
    null,
    { createAnecdote }
  )(AnecdoteForm)
