import { useState } from "react";

const AddTodo = () => {

  const [addTodos, setAddTodos] = useState('')
  const [priority,setPriority]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
}

  return (
    <div className=' p-8'>
      <form onSubmit={handleSubmit} className="mt-6 flex place-items-center justify-evenly gap-4">
      <input
        type='text'
        className='border w-full p-4 rounded-xl m-12'
        placeholder='Add'
        value={addTodos}
        onChange={(e)=>setAddTodos(e.target.value)}
        />
        <select
          placeholder='priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-4 border rounded-lg bg-blue-500 text-white"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      <button className='py-2 px-3 w-1/2  bg-blue-400 text-white font-bold rounded-xl'>
        Add
      </button>
      </form>
     
    </div>
  );
};

export default AddTodo;
