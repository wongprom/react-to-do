import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../interfaces';

interface IAddTodoProps {
  addTodo: (todo: ITodo) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
  const [formData, setFormData] = useState<ITodo>({
    author: '',
    id: '',
    isCompleted: false,
    todo: '',
    createdAt: null,
  });
  const uuid = uuidv4();
  var newDate = new Date();

  const handelSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // todo Validate input before add to all todos
    const newTodo = { ...formData, id: uuid, createdAt: newDate.valueOf() };
    addTodo(newTodo);
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
