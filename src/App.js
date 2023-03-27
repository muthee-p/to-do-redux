import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';


function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const {todos } = Todo;
 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo('');
  };

   const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));

  };

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
  <form onSubmit={handleSubmit} className="flex items-center mb-4">
    <input
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      type="text"
      placeholder="Enter To-Do"
      className="rounded-l-lg py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
    />
    <button
      type="submit"
      className="px-4 rounded-r-lg bg-blue-500 text-white font-bold p-2 transition duration-500 ease-in-out transform hover:bg-blue-600 hover:scale-110"
    >
      Add
    </button>
  </form>
  <ul className="bg-white w-full">
    {todos &&
      todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center border-b border-gray-200 py-2 px-4"
        >
          <span className="mr-auto">{todo.todo}</span>
          <button
            onClick={() => removeHandler(todo)}
            className="px-4 py-2 rounded-md bg-red-500 text-white font-bold transition duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110"
          >
            Delete
          </button>
        </li>
      ))}
  </ul>
</div>
  );
}

export default App;
