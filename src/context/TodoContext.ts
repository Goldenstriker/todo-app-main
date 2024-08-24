import { createContext } from "react";
import { TodoItem } from "../models/TodoItem";

export interface TodoContextState {
  todoItems: TodoItem[];
  setTodoItems: () => void;
}

const TodoContext = createContext<TodoContextState>({} as TodoContextState);
export default TodoContext;
