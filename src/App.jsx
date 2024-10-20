import  { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { BsFillPencilFill } from "react-icons/bs";
import Navbar from "./components/Navbar";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(storedTodos)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify('todos'))
  },[todos])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <Navbar/>
      
      <div className="flex gap-4 mt-8">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          className="flex-grow mr-2 border p-2 rounded-xl font-bold"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-xl font-bold" onClick={handleAddTodo}>Add</button>
      </div>
      {/* todo list */}
      <ul className="mt-8 border-b font-bold">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="mr-2"
            />
            <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </span>
            <button className="bg-yellow-500 text-white flex gap-3 place-items-center border px-4 py-2 rounded-xl"><BsFillPencilFill />Edit</button>
            <button
             
              onClick={() => handleDeleteTodo(todo.id)}
              className="ml-2 text-white bg-red-500 flex gap-3 place-items-center border px-4 py-2 rounded-xl"
            >
              Delete<Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;