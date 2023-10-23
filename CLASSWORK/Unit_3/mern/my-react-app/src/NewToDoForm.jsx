import { useState } from "react"

export default function NewToDoForm({addTodo}) {
const [newTodo, setNewTodos] = useState('')

function handleAddTodo(evt) {
    evt.preventDefault()
    addTodo(newTodo)
    setNewTodos('')
}

    return (
        <>
            <h2>New To-Do</h2>
            <form onSubmit={handleAddTodo}>
            <input 
            value={newTodo} 
            onChange= {(evt) => setNewTodos(evt.target.value)}
            placeholder="New To-Do" 
            />
            <button type="submit">ADD TO-DO</button>
            </form>
        </>

    )
}