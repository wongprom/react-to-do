import { useState } from "react";
import { Header } from "./components";
import { ITodo, ITodoContext } from "./interfaces";
import { Outlet } from "react-router-dom";

export function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<ITodo | null>(null);

  const sortTodos = (type: "createdAt" | "author") => {
    const tempTodos = [...todos];
    if (type === "author") {
      tempTodos.sort((a, b) => {
        if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
        if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
        return 0;
      });
    } else if (type === "createdAt") {
      tempTodos.sort((a, b) => {
        return b.createdAt! - a.createdAt!;
      });
    }
    setTodos(tempTodos);
  };

  const handleSortOnChange = (sortType: string) => {
    if (sortType === "createdAt" || sortType === "author") {
      sortTodos(sortType);
    } else {
      console.log("handleSortOnChange error");
    }
  };

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodoById = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const toggleCompleteTodoById = (id: string) => {
    const tempTodos = todos.map((todo) => {
      let tempTodo = { ...todo };
      if (tempTodo.id === id) {
        tempTodo.isCompleted = !tempTodo.isCompleted;
      }
      return tempTodo;
    });
    setTodos(tempTodos);
  };

  const handleFindTodoToEditById = (id: string) => {
    const found = todos.find((todo) => todo.id === id);
    if (found) {
      setEditTodo(found);
      setShowModal(true);
    } else {
      console.log("found is undefined");
    }
  };

  const handleEditTodo = (id: string, updatedTodoText: string) => {
    const updatedTodos = todos.map((todo) => {
      const tempTodo = todo;
      if (tempTodo.id === id) {
        tempTodo.todo = updatedTodoText;
      }
      return tempTodo;
    });
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const todoContext: ITodoContext = {
    handleSortOnChange,
    todos,
    showModal,
    editTodo,
    addTodo,
    deleteTodoById,
    toggleCompleteTodoById,
    handleFindTodoToEditById,
    handleCloseModal,
    handleEditTodo,
  };

  return (
    <>
      <Header />
      <main>
        <Outlet context={todoContext} />
        {/* <section>
					<AddTodoPage addTodo={addTodo} />
					</section>
					<section>
					<TodoListPage todos={todos} />
				</section> */}
      </main>
    </>
  );
}
