import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../interfaces';

export const uuid = uuidv4();
export const newDate = new Date();

export const isFormInputsValid = (formData: ITodo) => {
  return formData.author !== '' && formData.todo !== '';
};
