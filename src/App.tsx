import { useState } from 'react';
import { Header } from './components';
import { ITodo, ITodoContext } from './interfaces';
import { Outlet } from 'react-router-dom';

export function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };

  const todoContext: ITodoContext = {
    todos,
    addTodo,
  };
  console.log('🚀 ~ App ~ todoContext:', todoContext);

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
