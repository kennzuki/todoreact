import './App.css';
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <Navbar />
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
