import { ITodo } from '../interfaces';

interface ITodoProps {
  todo: ITodo;
}
export const Todo = ({ todo }: ITodoProps) => {
  return (
    <div>
      <p>id: {todo.id}</p>
      <p>author: {todo.author}</p>
      <p>CreatedAt: {todo.createdAt}</p>
      <p>isCompleted: {todo.isCompleted}</p>
      <p>Todo: {todo.todo}</p>
    </div>
  );
};
