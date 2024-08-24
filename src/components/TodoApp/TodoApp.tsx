import { useState } from "react";
import { items } from "../../assets/data/dummydata";
import Checkbox from "../Checkbox/Checkbox";
import TopBar from "./TopBar";

enum TodoStatusFilter {
  All = 1,
  Completed = 2,
  Active = 3,
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState(items);
  const [todosFilter, setTodoFilter] = useState<TodoStatusFilter>(
    TodoStatusFilter.All
  );

  const todoFilterOptions = [
    TodoStatusFilter.All,
    TodoStatusFilter.Active,
    TodoStatusFilter.Completed,
  ];

  const todoItems =
    todosFilter === TodoStatusFilter.All
      ? todos
      : todos.filter(
          (x) =>
            (x.completed === true &&
              todosFilter === TodoStatusFilter.Completed) ||
            (x.completed === false && todosFilter === TodoStatusFilter.Active)
        );
  return (
    <div className="border-none shadow-xl z-20 rounded-b-md bg-transparent">
      <TopBar />

      <div className="bg-white rounded-t-md border-none overflow-hidden">
        <div className="h-[300px] overflow-y-auto custom-scrollbar">
          {todoItems.length > 0 ? (
            todoItems.map((item) => (
              <div
                key={item.id}
                className="group w-full h-fit border-b-[1px] p-[10px] flex flex-row gap-3 text-center last:border-b-0"
              >
                <Checkbox
                  checked={item.completed}
                  onChanged={(ev, value) => {
                    let todosCopy = todos.slice();
                    let todoIndex = todosCopy.findIndex(
                      (x) => x.id === item.id
                    );
                    todosCopy[todoIndex].completed = !!value;
                    setTodos([...todosCopy]);
                  }}
                />
                <span className={`${item.completed ? "line-through" : ""}`}>
                  {item.todo}
                </span>
                <img
                  className="group-hover:block h-[20px] hidden"
                  src="../../../icon-cross.svg"
                  onClick={() => {
                    let todosCopy = todos.slice();
                    setTodos([...todosCopy.filter((x) => x.id !== item.id)]);
                  }}
                />
              </div>
            ))
          ) : (
            <div className="flex h-full justify-center">
              <span className="content-center">No todo items left</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-[30px] py-5 px-1 bg-white rounded-b-md flex flex-row border-t-[1px] justify-between items-center">
        <div>
          {todos.filter((x) => x.completed === false).length} items left
        </div>
        <div className="flex flex-row">
          {todoFilterOptions.map((x) => (
            <a
              href="#"
              className={`mx-2 ${todosFilter === x && "text-brightBlue"}`}
              onClick={() => setTodoFilter(x)}
            >
              {TodoStatusFilter[x]}
            </a>
          ))}
        </div>
        <div>
          <a
            href="#"
            onClick={() => setTodos(todos.filter((x) => !x.completed))}
          >
            Clear Completed
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
