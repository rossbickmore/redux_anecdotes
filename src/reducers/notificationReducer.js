const notificationReducer = (state = "", action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'VOTE': 
            return action.data
    }
    return state
}

  //ACTION CREATORS
  
export const toggleCurrentVote = (id) => {
    return {
      type: "VOTE",
      data: { id } 
    }
}


export default notificationReducer