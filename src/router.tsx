import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { App } from './App';
import { AddTodoPage, TodoListPage } from './components';
import { AboutPage } from './pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<TodoListPage />} />
      <Route path='add-todo' element={<AddTodoPage />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
);
