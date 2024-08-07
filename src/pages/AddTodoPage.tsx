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
    <>
      <form>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          value={formData.author}
          onChange={handleInputOnChange}
        />
        <label htmlFor="todo">New todo</label>
        <input
          id="todo"
          name="todo"
          type="text"
          value={formData.todo}
          onChange={handleInputOnChange}
        />
        <button onClick={(e)=>handelSubmit(e)}>Add Todo</button>
      </form>
    </>
  );
};
