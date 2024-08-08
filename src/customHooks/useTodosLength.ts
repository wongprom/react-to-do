import { useTodoContext } from ".";

export const useTodosLength = (): number => {
  const { todos } = useTodoContext();
  return todos.length;
};
