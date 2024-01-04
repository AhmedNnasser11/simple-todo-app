import { ButtonHTMLAttributes, Dispatch, ReactNode, SetStateAction } from "react";

// types.ts
export interface RadioTypes {
  id: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string
  }
  
 export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }
  
export interface RowProps {
    item: {
      text: string;
      isCompleted: boolean | null;
      id: number;
    };
    handleOpen: () => void;
    edit: (item: { text: string; isCompleted: boolean | null; id: number }) => void;
    changeStatus: (itemId: number) => void;
    deleteTodo: (itemId: number) => void;
  }
  
  export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean | null;
  }
  
  export interface Store {
    isOpen: boolean;
    todoList: Todo[];
    todo: Todo;
    handleOpen: () => void;
    addTodo: (todo: Todo) => void;
    edit: (todo: Todo) => void;
    resetEdit: () => void;
    deleteTodo: (todoId: number) => void;
    changeStatus: (todoId: number) => void;
  }

 export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
  }

  export interface FilterProps {
    status: string;
    setStatus: Dispatch<SetStateAction<string>>;
  }