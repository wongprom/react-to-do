import { Modal, Todo } from "../components";
import { useTodoContext } from "../customHooks";

export const TodoListPage = () => {
  const { todos, showModal } = useTodoContext();
  return (
    <div className="todo-list-page">
      {showModal && <Modal />}
      <h1>Todos</h1>
      <ul>
        {todos
          .sort((x, y) => {
            // @ts-ignore
            return y.createdAt - x.createdAt;
          })
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
};
