import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../interfaces';

export const AddTodo = () => {
  const [formData, setFormData] = useState<ITodo>({
    author: '',
    id: '',
    isCompleted: false,
    todo: '',
    createdAt: null,
  });
  const uuid = uuidv4();
  var newDate = new Date();
  console.log(typeof newDate.valueOf());

  const handelSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // todo Validate input before add to all todos
    const newTodo = { ...formData, id: uuid, createdAt: newDate.valueOf() };
    console.log('🚀 ~ AddTodo ~ newTodo:', newTodo);
  };

  const handleInputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log('🚀 ~ AddTodo ~ formData:', formData);
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
