import React from 'react'
import changeFilter from '../reducers/filterReducer'

const Filter = (props) => {
 
  const handleChange = (e) => {
    let text = e.target.value
    props.store.dispatch(
      changeFilter(text)
    )
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={""} onChange={handleChange} />
    </div>
  )
}

export default Filter