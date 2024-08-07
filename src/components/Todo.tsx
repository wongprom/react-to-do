import Avatar, { genConfig } from "react-nice-avatar";
import { useTodoContext } from "../customHooks";
import { ITodo } from "../interfaces";

interface ITodoProps {
  todo: ITodo;
}
export const Todo = ({ todo }: ITodoProps) => {
  {
    /* <p>id: {todo.id}</p> */
  }
  {
    /* <p>Display time it took to complete...?</p> */
  }
  {
    /* <p>isCompleted: {todo.isCompleted === true ? "true" : "false"}</p> */
  }
  const { deleteTodoById, toggleCompleteTodoById, handleFindTodoToEditById } =
    useTodoContext();
  const config = genConfig();
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const DAYS_OF_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const convertCreatedAtToNumber = Number(todo.createdAt);
  const workingDate = new Date(convertCreatedAtToNumber);

  const year = workingDate.getFullYear().toString();
  const month = MONTH[workingDate.getMonth()];
  const day = DAYS_OF_WEEK[workingDate.getDay()];
  const COLORS = [
    "#440a1c",
    "#282421",
    "#f0f4b2",
    "#757540",
    "#606e93",
    "#000200",
    "#74e8c7",
    "#afedc8",
    "#623a75",
    "#dfe2d0",
    "#251a44",
    "#cdbaf2",
    "#12255b",
    "#11685a",
    "#090a06",
  ];
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

  const inlineStyle = {
    backgroundColor: randomColor,
  };

  const displayFullDate = `${year}/${month}/${day}`;
  const displayFullTime = `${workingDate.getHours()}:${workingDate.getMinutes()}`;

  return (
    <li className="todo-card">
      <div className={`rektangle`} style={inlineStyle}></div>
      <div className="content-wrapper">
        <div className="avatar-wrapper">
          <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
        </div>
        <p>
          <span>
            <strong>{todo.author} </strong>
          </span>
          `s todo is{" "}
        </p>
        <p className={`${todo.isCompleted && "text-line-through"}`}>
          <strong>{todo.todo}</strong>
        </p>
        <p className="created">
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
      <div className="buttons-wrapper">
        <div className="button-wrapper">
          <button onClick={() => toggleCompleteTodoById(todo.id)}>
            <span className="material-symbols-outlined">check</span>
          </button>
        </div>
        <div className="button-wrapper">
          <button onClick={() => handleFindTodoToEditById(todo.id)}>
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>
        <div className="button-wrapper">
          <button onClick={() => deleteTodoById(todo.id)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </li>
  );
};
