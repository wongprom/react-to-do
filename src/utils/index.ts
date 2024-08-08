import { COLORS } from "../data";
import { ITodo } from "../interfaces";

export const isFormInputsValid = (formData: ITodo) => {
  return formData.author !== "" && formData.todo !== "";
};

export const getRandomColorFromPallete = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
