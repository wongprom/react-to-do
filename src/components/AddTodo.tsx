import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { ITodo } from '../interfaces';
import { isFormInputsValid, newDate, uuid } from '../utils';
import { initialFormData } from '../data';

interface IAddTodoProps {
  addTodo: (todo: ITodo) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
  const [formData, setFormData] = useState<ITodo>(initialFormData);

  const handelSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newTodo = { ...formData, id: uuid, createdAt: newDate.valueOf() };
    if (isFormInputsValid(formData)) {
      addTodo(newTodo);
      setFormData(initialFormData);
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
