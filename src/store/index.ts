/** @format */

import { create } from "zustand";
import { Store } from "../../types";



const useStore = create<Store>((set) => ({
  isOpen: false,
  todoList: [],
  todo: {
    id: 0,
    text: "",
    isCompleted: false,
  },
  handleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  addTodo: (newTodo) =>
  set((state) => {
    const existingTodoIndex = state.todoList.findIndex(
      (item) => item.id === newTodo.id
    );

    if (existingTodoIndex !== -1) {
      const updatedTodoList = [...state.todoList];
      updatedTodoList[existingTodoIndex] = newTodo;

      return { todoList: updatedTodoList, todo: newTodo };
    } else {
      // Generate a unique id for a new todo
      const uniqueId = Math.max(...state.todoList.map((item) => item.id), 0) + 1;
      const todoWithUniqueId = { ...newTodo, id: uniqueId };

      return { todoList: [...state.todoList, todoWithUniqueId], todo: todoWithUniqueId };
    }
  }),
  edit: (todo) => set(() => ({ todo })),
  resetEdit: () =>
    set(() => ({
      todo: {
        id: 0,
        text: "",
        isCompleted: false,
      },
    })),
  deleteTodo: (todoId) =>
    set((state) => ({
      todoList: state.todoList.filter((item) => item.id !== todoId),
    })),
  changeStatus: (todoId) =>
    set((state) => ({
      todoList: state.todoList.map((item) =>
        item.id === todoId
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      ),
    })),
}));

export default useStore;
