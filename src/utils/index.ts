import { ITodo } from '../interfaces';

export const isFormInputsValid = (formData: ITodo) => {
  return formData.author !== '' && formData.todo !== '';
};
