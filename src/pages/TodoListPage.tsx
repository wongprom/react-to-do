import { Todo } from '../components';
import { useTodoContext } from '../customHooks';

export const TodoListPage = () => {
  const { todos } = useTodoContext();
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
