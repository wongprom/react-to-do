import { COLORS } from '../data';
import { ITodo } from '../interfaces';

export const isFormInputsValid = (formData: ITodo) => {
  return formData.author !== '' && formData.todo !== '';
};

export const getRandomColorFromPallete = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds} ${year}-${month}-${day}`;
};

export const calculateDuration = (createdAt: number, completedAt: number) => {
  const durationMs = completedAt - createdAt;

  const seconds = Math.floor(durationMs / 1000) % 60;
  const minutes = Math.floor(durationMs / (1000 * 60)) % 60;
  const hours = Math.floor(durationMs / (1000 * 60 * 60)) % 24;
  const days = Math.floor(durationMs / (1000 * 60 * 60 * 24)) % 30;
  const months = Math.floor(durationMs / (1000 * 60 * 60 * 24 * 30)) % 12;
  const years = Math.floor(durationMs / (1000 * 60 * 60 * 24 * 365));

  return { years, months, days, hours, minutes, seconds };
};
