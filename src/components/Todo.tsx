import { ITodo } from '../interfaces';

interface ITodoProps {
  todo: ITodo;
}
export const Todo = ({ todo }: ITodoProps) => {
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
        <button>Delete</button>
      </div>
    </li>
  );
};
