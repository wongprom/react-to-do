import { Todo } from '.';
import { todosData } from '../data';

export const TodoList = () => {
  console.log('🚀 ~ todosData:', todosData);

  return (
    <div>
      <h2>ITodosData</h2>
      {todosData.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
