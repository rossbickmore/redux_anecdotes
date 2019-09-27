
const filterReducer = (state = "", action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "FILTER": 
            return action.text
    }
    return state
}

  //ACTION CREATORS
  
export const changeFilter = (text) => {
    return {
      type: 'FILTER',
      text,
    }
}



export default filterReducer