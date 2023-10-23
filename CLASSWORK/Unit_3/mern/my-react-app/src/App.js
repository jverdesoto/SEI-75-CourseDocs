import { useState } from "react";
import ToDoList from "./ToDoList"
import "./styles.css"
import NewToDoForm from "./NewToDoForm";

export default function App() {
const [todos, setTodos] = useState([
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
])

const [showTodos, setShowTodos] = useState(true)

function addTodo(todo) {
  setTodos([...todos, todo])
}

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)} >
        {showTodos ? 'HIDE' : 'SHOW'}
        </button>
      {showTodos && <ToDoList todos={todos}/>}
      <hr />
      <NewToDoForm addTodo={addTodo}/>
    </div>
  )
}