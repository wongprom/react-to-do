import { ITodo } from '../interfaces';

export const newDate = new Date();

export const isFormInputsValid = (formData: ITodo) => {
  return formData.author !== '' && formData.todo !== '';
};
