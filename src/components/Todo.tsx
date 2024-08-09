import Avatar, { genConfig } from 'react-nice-avatar';
import { useTodoContext, useTodosLength } from '../customHooks';
import { DAYS_OF_WEEK, MONTH_OF_YEAR } from '../data';
import { ITodo } from '../interfaces';
import { getRandomColorFromPallete } from '../utils';

interface ITodoProps {
  todo: ITodo;
  index: number;
}
export const Todo = ({ todo, index }: ITodoProps) => {
  {
    /* <p>Display time it took to complete...?</p> */
  }
  {
    /* <p>isCompleted: {todo.isCompleted === true ? "true" : "false"}</p> */
  }
  const {
    deleteTodoById,
    toggleCompleteTodoById,
    handleFindTodoToEditById,
    moveTodoUp,
    moveTodoDown,
  } = useTodoContext();
  const todosLength = useTodosLength();
  // Avatar
  const config = genConfig();

  const convertCreatedAtToNumber = Number(todo.createdAt);
  const workingDate = new Date(convertCreatedAtToNumber);
  const year = workingDate.getFullYear().toString();
  const month = MONTH_OF_YEAR[workingDate.getMonth()];
  const day = DAYS_OF_WEEK[workingDate.getDay()];

  const inlineStyle = {
    backgroundColor: getRandomColorFromPallete(),
  };

  const displayFullTime = `${workingDate.getHours()}:${workingDate.getMinutes()}:${workingDate.getSeconds()}`;

  return (
    <li className='todo-card'>
      <div className={`rektangle`} style={inlineStyle}></div>
      <div className='content-wrapper'>
        <div className='avatar-wrapper'>
          {/* // ! ? How to prevent Avatar to change when state changes => todos,randomColor, onClick={() => handleFindTodoToEditById(todo.id)  */}
          <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
        </div>
        <p>
          <span>
            <strong>{todo.author} </strong>
          </span>
          `s todo is{' '}
        </p>
        <p className={`${todo.isCompleted && 'text-line-through'}`}>
          <strong>{todo.todo}</strong>
        </p>
        <p className='created'>
          <span>
            <strong>{displayFullTime}</strong>
          </span>
          <span>
            <strong>{day}</strong>
          </span>
          <span>
            <strong>{month}</strong>
          </span>
          <span>
            <strong>{year}</strong>
          </span>
        </p>
      </div>
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
