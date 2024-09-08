import { createContext } from "react";
import { TodoItem } from "../models/TodoItem";

export interface TodoContextType {
  todoItems: TodoItem[];
  setTodoItems: () => void;
}

const TodoContext = createContext<TodoContextType>({} as TodoContextType);
export default TodoContext;
