export interface ITodo {
  author: string;
  id: string;
  isCompleted: boolean;
  todo: string;
  createdAt: number | null;
}

export interface ITodoContext {
  handleSortOnChange: (sortType: string) => void;
  todos: ITodo[];
  editTodo: ITodo | null;
  showModal: boolean;
  addTodo: (todo: ITodo) => void;
  deleteTodoById: (id: string) => void;
  toggleCompleteTodoById: (id: string) => void;
  handleFindTodoToEditById: (id: string) => void;
  handleCloseModal: () => void;
  handleEditTodo: (id: string, updatedTodoText: string) => void;
  moveTodoDown: (index: number) => void;
  moveTodoUp: (index: number) => void;
}
