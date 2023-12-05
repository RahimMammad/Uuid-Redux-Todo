import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../redux/features/TodoReducer';
import { v4 as uuidv4 } from 'uuid';
const Todos = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const todos = useSelector((state) => state.todo.todo)
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo({id: uuidv4(), text: newTodo}))
        setNewTodo('')
    }

    const handleEditTodo = (id, text) => {
        setEditId(id)
        setEditText(text)
    }

    const handleEditSave = () => {
        dispatch(editTodo({id: editId, newtext: editText}))
        setEditId(null)
        setEditText('')
    }

    const handleDeleteTodo = (id) => {
        dispatch(removeTodo(id))
    }
  return (
    <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
            <>
                {todos.map((todo) => (
                <div key={todo.id}>
                    {editId === todo.id ? (
                        <>
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                            <button onClick={handleEditSave}>Save</button>
                        </>
                    ) : (
                        <>
                            <span>{todo.text} - </span>
                            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
            </>
    </div>
  )
}

export default Todos