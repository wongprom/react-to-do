import { Modal, Todo } from "../components";
import { useTodoContext } from "../customHooks";

export const TodoListPage = () => {
  const { todos, showModal } = useTodoContext();
  return (
    <div className="todo-list-page">
      {showModal && <Modal />}
      <h1>Todos</h1>
      <ul>
        {/* sort todos by timeStamp, newest first */}
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
