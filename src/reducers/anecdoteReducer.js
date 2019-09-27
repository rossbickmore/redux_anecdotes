const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_ONE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    case 'CREATE_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data   
  }
  return state
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export const addToVote = (id) => {
  return {
    type: "ADDONE",
    data: { id },
  }
}

export const createAnecdote = (content) => {
  return {
    type: "CREATE_ANECDOTE",
    data: content,
  }
}



export default anecdoteReducer