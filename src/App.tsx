import { useState } from 'react';
import { Header } from './components';
import { ITodo, ITodoContext } from './interfaces';
import { Outlet } from 'react-router-dom';

export function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodoById = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const toggleCompleteTodoById = (id: string) => {
    const tempTodos = todos.map((todo) => {
      let tempTodo = { ...todo };
      if (tempTodo.id === id) {
        tempTodo.isCompleted = !tempTodo.isCompleted;
      }
      return tempTodo;
    });
    setTodos(tempTodos);
  };

  const todoContext: ITodoContext = {
    todos,
    addTodo,
    deleteTodoById,
    toggleCompleteTodoById,
  };

  return (
    <>
      <Header />
      <main>
        <Outlet context={todoContext} />
        {/* <section>
          <AddTodoPage addTodo={addTodo} />
          </section>
          <section>
          <TodoListPage todos={todos} />
        </section> */}
      </main>
    </>
  );
}
