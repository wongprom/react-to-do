import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useTodoContext } from '../customHooks';
import { initialFormData } from '../data';
import { isFormInputsValid } from '../utils';
import { ITodo } from '../interfaces';

export const AddTodoPage = () => {
  const [formData, setFormData] = useState<ITodo>(initialFormData);
  const { addTodo } = useTodoContext();
  const navigate = useNavigate();

  const handelSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newTodo = { ...formData, id: uuidv4(), createdAt: Date.now() };
    if (isFormInputsValid(formData)) {
      addTodo(newTodo);
      setFormData(initialFormData);
      navigate('/');
    }
  };

  const handleInputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className='add-todo-page'>
      <h1>Add New Todo</h1>
      <form className='form'>
        <div className='input-wrapper'>
          <label htmlFor='author'>Author</label>
          <input
            className='border-radius-20'
            id='author'
            name='author'
            onChange={handleInputOnChange}
            type='text'
            value={formData.author}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='todo'>New todo</label>
          <input
            className='border-radius-20'
            id='todo'
            name='todo'
            onChange={handleInputOnChange}
            type='text'
            value={formData.todo}
          />
        </div>
        <div className='button-wrapper'>
          <button onClick={(e) => handelSubmit(e)}>
            <strong>Add Todo</strong>
          </button>
        </div>
      </form>
    </div>
  );
};
