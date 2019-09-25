import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)
store.subscribe(() => {
  const storeNow = store.getState()
  storeNow.sort(function(a, b) {
    return b.votes - a.votes;
  });
})