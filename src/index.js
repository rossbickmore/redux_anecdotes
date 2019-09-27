import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  currentVote: notificationReducer,
  anecdotes: anecdoteReducer
})

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)
store.subscribe(() => {
  const storeNow = store.getState().anecdotes
  storeNow.sort(function(a, b) {
    return b.votes - a.votes;
  });
})