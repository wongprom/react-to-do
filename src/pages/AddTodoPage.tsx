import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

import { initialFormData } from '../data';
import { isFormInputsValid, newDate, uuid } from '../utils';
import { ITodo, ITodoContext } from '../interfaces';

export const AddTodoPage = () => {
  const [formData, setFormData] = useState<ITodo>(initialFormData);
  const { addTodo } = useOutletContext<ITodoContext>();
  const navigate = useNavigate();

  const handelSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newTodo = { ...formData, id: uuid, createdAt: newDate.valueOf() };
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
        <button onClick={handelSubmit}>Add Todo</button>
      </form>
    </>
  );
};
