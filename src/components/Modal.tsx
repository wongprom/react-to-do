import { useState } from 'react';
import { useTodoContext } from '../customHooks';

export const Modal = () => {
  const { editTodo } = useTodoContext();
  const [input, setInput] = useState<string>(editTodo!.todo);
  const { handleCloseModal, handleEditTodo } = useTodoContext();

  const handleOnSave = () => {
    handleEditTodo(editTodo!.id, input);
    handleCloseModal();
  };
  return (
    <div className='backdrop-wrapper'>
      <div className='modal-backdrop'>
        <div className='modal'>
          <div className='modal-body'>
            <label htmlFor='edit'>Edit Todo</label>
            <input
              id='edit'
              name='edit'
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button className='close-btn' onClick={handleCloseModal}>
            Close
          </button>
          <button className='close-btn' onClick={handleOnSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
