import { useOutletContext } from 'react-router-dom';

import { ITodoContext } from '../interfaces';

export const useTodoContext = (): ITodoContext => {
  return useOutletContext<ITodoContext>();
};
