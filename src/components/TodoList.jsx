import React from 'react'

const TodoList = (props) => {
  return (
    <div>
        <h2>Your Todos here..</h2>
        {props.todos.map((e) => (
            <div className='display'>
                <div>
                {e.value}
                </div>
                <div>
                <input type="radio" />
                </div>
            </div>
        ))}

    </div>
  )
}

export default TodoList