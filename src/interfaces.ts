export interface ITodo {
  author: string;
  id: string;
  isCompleted: boolean;
  todo: string;
  createdAt: number | null;
}

export interface ITodoContext {
  todos: ITodo[];
  showModal: boolean;
  addTodo: (todo: ITodo) => void;
  deleteTodoById: (id: string) => void;
  toggleCompleteTodoById: (id: string) => void;
  handleEditTodoById: (id: string) => void;
}
