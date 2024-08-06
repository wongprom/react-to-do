import { useState } from 'react';
import { AddTodo, TodoList } from './components';
import { ITodo } from './interfaces';

export function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <main>
      <section>
        <AddTodo addTodo={addTodo} />
      </section>
      <section>
        <TodoList todos={todos} />
      </section>
    </main>
  );
}
