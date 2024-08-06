import { useOutletContext } from 'react-router-dom';

import { ITodoContext } from '../interfaces';
import { Todo } from '../components';

export const TodoListPage = () => {
  const { todos } = useOutletContext<ITodoContext>();
  return (
    <div>
      <h2>Todos</h2>
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
