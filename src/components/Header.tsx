import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">The Movie List</h1>
      <div className="links">
        <Link to="add-todo" className="link">
          Add new Todo
        </Link>
        <Link to="/" className="link">
          Todo List
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </header>
  );
};
