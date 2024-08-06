import { useTodoContext } from '../customHooks';
import { ITodo } from '../interfaces';

interface ITodoProps {
  todo: ITodo;
}
export const Todo = ({ todo }: ITodoProps) => {
  const { deleteTodoById } = useTodoContext();
  return (
    <li className="todo">
      <p>id: {todo.id}</p>
      <p>author: {todo.author}</p>
      <p>CreatedAt: {todo.createdAt}</p>
      <p>isCompleted: {todo.isCompleted}</p>
      <p>Todo: {todo.todo}</p>
      <div>
        <button>Done</button>
        <button>Edit</button>
        <button onClick={() => deleteTodoById(todo.id)}>Delete</button>
      </div>
    </li>
  );
};
