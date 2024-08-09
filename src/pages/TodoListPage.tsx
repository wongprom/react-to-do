import { useEffect, useState } from 'react';
import { Modal, Todo } from '../components';
import { useTodoContext } from '../customHooks';

export const TodoListPage = () => {
  const { todos, showModal, handleSortOnChange } = useTodoContext();
  const [sortType, setSortType] = useState('createdAt');

  useEffect(() => {
    handleSortOnChange(sortType);
  }, [sortType]);

  return (
    <div className='todo-list-page'>
      {showModal && <Modal />}
      <h1>Todos</h1>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value='createdAt'>CreatedAt</option>
        <option value='author'>Author</option>
      </select>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};
