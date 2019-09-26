const notificationReducer = (state = "ALL", action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'FILTER': 
      return action.type
    }
    return state
}
  
  //ACTION CREATORS
  
export const filter = () => {
    return {
      type: "FILTER"
    }
}

export default notificationReducer