export interface ITodo {
  author: string;
  id: string;
  isCompleted: boolean;
  todo: string;
  createdAt: number | null;
}

export interface ITodoContext {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodoById: (id: string) => void;
}
