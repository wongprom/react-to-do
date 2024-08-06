import { ITodo } from '../interfaces';
import { Todo } from '../components';

interface ITodosProps {
  todos: ITodo[] | [];
}

export const TodoListPage = ({ todos }: ITodosProps) => {
  return (
    <div>
      <h2>Todos</h2>
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
