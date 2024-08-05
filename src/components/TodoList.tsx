import { Todo } from '.';
import { ITodo } from '../interfaces';

interface ITodosProps {
  todos: ITodo[] | [];
}

export const TodoList = ({ todos }: ITodosProps) => {
  return (
    <div>
      <h2>Todos</h2>
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
