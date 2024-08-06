import { useTodoContext } from '../customHooks';
import { ITodo } from '../interfaces';

interface ITodoProps {
  todo: ITodo;
  edit?: false | true;
}
export const Todo = ({ todo }: ITodoProps) => {
  const { deleteTodoById, toggleCompleteTodoById, handleEditTodoById } =
    useTodoContext();
  return (
    <li className="todo-card">
      <p>id: {todo.id}</p>
      <p>author: {todo.author}</p>
      <p>CreatedAt: {todo.createdAt}</p>
      <p>Display time it took to complete...?</p>
      <p>isCompleted: {todo.isCompleted === true ? 'true' : 'false'}</p>
      <p className={`${todo.isCompleted && 'text-line-through'}`}>
        Todo: {todo.todo}
      </p>
      <div>
        <button onClick={() => toggleCompleteTodoById(todo.id)}>
          complete
        </button>
        <button onClick={() => handleEditTodoById(todo.id)}>Edit</button>
        <button onClick={() => deleteTodoById(todo.id)}>Delete</button>
      </div>
    </li>
  );
};
