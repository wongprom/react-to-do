import { MouseEventHandler, useState } from 'react';

export const AddTodo = () => {
  const [input, setInput] = useState<string>('');

  const handelSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // todo Validate input
    console.log('input: ', input);
  };

  return (
    <>
      <form>
        <label htmlFor="input">Add new todo</label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handelSubmit}>Add Todo</button>
      </form>
    </>
  );
};
