import React  , {useState} from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

const TodoItem = () => {

    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([]);

    const onchangehandler = (e) => {
        settodo(e.target.value);
        // console.log(e.target.value);
    }

    const onclickhandler = () => {
        // console.log(todo);
        settodos([...todos , {
            id: Date.now(),
            value : todo,
            isComplete : false
        }
    ]);
    }

  return (
    <div><h2>Enter the Todos here</h2>
        <Todo onChange={onchangehandler} onClick={onclickhandler}/>
        <TodoList todos={todos}/>
    </div>
  )
}

export default TodoItem