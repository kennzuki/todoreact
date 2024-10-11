const AddTodo = () => {
  return (
    <div className=' mt-6 flex place-items-center justify-evenly gap-4'>
      <input
        type='text'
        className='border w-full p-4 rounded-xl m-12'
        placeholder='Add'
      />
      <button className='py-2 px-3 w-1/2  bg-blue-400 text-white font-bold rounded-xl'>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
