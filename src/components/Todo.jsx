import React from 'react'

const Todo = (props) => {
  return (
    <div className='inputdiv'>
        <input onChange={props.onChange} className='todoinput' type="text" placeholder='Enter the Todo' />
        <button onClick={props.onClick} className='inputbttn'>+</button>
    </div>
  )
}

export default Todo