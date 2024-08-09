import Avatar, { genConfig } from 'react-nice-avatar';
import { useTodoContext, useTodosLength } from '../customHooks';
import { ITodo } from '../interfaces';
import {
  calculateDuration,
  formatTimestamp,
  getRandomColorFromPallete,
} from '../utils';
import { useEffect, useState } from 'react';

interface ITodoProps {
  todo: ITodo;
  index: number;
}
export const Todo = ({ todo, index }: ITodoProps) => {
  const [avatarConfig, setAvatarConfig] = useState(genConfig());
  const [bgColorRektangle, setBgColorRektangle] = useState(
    getRandomColorFromPallete()
  );
  const {
    deleteTodoById,
    toggleCompleteTodoById,
    handleFindTodoToEditById,
    moveTodoUp,
    moveTodoDown,
  } = useTodoContext();
  const todosLength = useTodosLength();

  useEffect(() => {
    setAvatarConfig(genConfig());
  }, []);

  useEffect(() => {
    setBgColorRektangle(getRandomColorFromPallete());
  }, []);

  const inlineStyle = {
    backgroundColor: bgColorRektangle,
  };
  const createdAtFormatted = formatTimestamp(todo.createdAt!);
  const completedAtFormatted = todo.isCompleted
    ? formatTimestamp(Date.now())
    : 'N/A';
  const duration = todo.isCompleted
    ? calculateDuration(todo.createdAt!, Date.now())
    : null;

  return (
    <li className='todo-card'>
      <div className={`rektangle`} style={inlineStyle}></div>
      <div className='content-wrapper'>
        <div className='avatar-wrapper'>
          <Avatar style={{ width: '8rem', height: '8rem' }} {...avatarConfig} />
        </div>
        <p>
          <span>
            <strong>{todo.author} </strong>
          </span>
          `s todo is {todo.isCompleted && 'Completed 🥳'}
        </p>
        <p className={`${todo.isCompleted && 'style-completed'}`}>
          <strong>{todo.todo}</strong>
        </p>
        {todo.isCompleted ? (
          <p className='created completed'>
            <span>
              <strong>Completed At: {completedAtFormatted}</strong>
            </span>
            <span>
              Duration:{' '}
              {`${duration?.years} years, ${duration?.months} months, ${duration?.days} days, ${duration?.hours} hours, ${duration?.minutes} minutes, ${duration?.seconds} seconds`}
            </span>
          </p>
        ) : (
          <p className='created'>
            <span>
              <strong>Created At: {createdAtFormatted}</strong>
            </span>
          </p>
        )}
      </div>
      <div className='buttons-wrapper'>
        <div className='buttons-wrapper-left'>
          <div className='button-wrapper'>
            <button onClick={() => toggleCompleteTodoById(todo.id)}>
              <span className='material-symbols-outlined'>check</span>
            </button>
          </div>
          <div className='button-wrapper'>
            <button onClick={() => handleFindTodoToEditById(todo.id)}>
              <span className='material-symbols-outlined'>edit</span>
            </button>
          </div>
          <div className='button-wrapper'>
            <button onClick={() => deleteTodoById(todo.id)}>
              <span className='material-symbols-outlined'>close</span>
            </button>
          </div>
        </div>
        <div className='buttons-wrapper-right arrow-buttons'>
          <div className='button-wrapper'>
            <button onClick={() => moveTodoUp(index)} disabled={index === 0}>
              <span className='material-symbols-outlined'>
                keyboard_arrow_up
              </span>
            </button>
          </div>
          <div className='button-wrapper'>
            <button
              onClick={() => moveTodoDown(index)}
              disabled={index === todosLength - 1}
            >
              <span className='material-symbols-outlined'>
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
