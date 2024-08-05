import { AddTodo, TodoList } from './components';

export function App() {
  return (
    <main>
      <section>{/* Add 1 todo */}</section>
      <AddTodo />
      <section>{/* Display all Todos */}</section>
      <TodoList />
    </main>
  );
}
