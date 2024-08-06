import { useState } from 'react';
import { AddTodoPage, TodoListPage } from './components';
import { ITodo } from './interfaces';

export function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <main>
      <section>
        <AddTodoPage addTodo={addTodo} />
      </section>
      <section>
        <TodoListPage todos={todos} />
      </section>
    </main>
  );
}
