import { useState } from "react";
import { items } from "../../assets/data/dummydata";
import Checkbox from "../Checkbox/Checkbox";
import TopBar from "./TopBar";
import { TodoStatusFilter } from "../../models/TodoStatusFilter";
import { Reorder, AnimatePresence, motion } from "framer-motion";
import { TodoItem } from "../../models/TodoItem";
import { Theme, useTheme } from "../../context/ThemeContext/ThemeContext";

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

  const onCheckBoxChanged = (item: TodoItem, value?: boolean) => {
    let todosCopy = [...todos];
    let todoIndex = todosCopy.findIndex((x) => x.id === item.id);
    todosCopy[todoIndex].completed = !!value;
    setTodos([...todosCopy]);
  };

  const { theme } = useTheme();

  return (
    <div className={`border-none shadow-xl z-20 rounded-b-md bg-transparent`}>
      <TopBar setTodos={setTodos} todos={todos} />

      <div
        className={`${
          theme === Theme.light
            ? "bg-lightCardBackgroundColor text-lightTextColor"
            : "bg-darkCardBackgroundColor text-darkTextColor"
        } rounded-t-md border-none overflow-hidden`}
      >
        <div className="h-[300px] overflow-y-auto custom-scrollbar">
          {todoItems.length > 0 ? (
            <Reorder.Group axis="y" onReorder={setTodos} values={todoItems}>
              <AnimatePresence initial={false}>
                {todoItems.map((item) => (
                  <Reorder.Item
                    value={item}
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{ opacity: 0, x: 25, transition: { duration: 0.3 } }}
                    whileDrag={{ backgroundColor: "#e3e3e3" }}
                    className={`group w-full h-fit border-b-[1px] ${
                      theme === Theme.light
                        ? "border-lightBorderColor"
                        : "border-darkBorderColor"
                    }  last:border-b-0 cursor-pointer`}
                  >
                    <div
                      key={item.id}
                      className="group p-[10px] flex flex-row gap-3 text-center items-center justify-between"
                    >
                      <div className="flex flex-row gap-3">
                        <Checkbox
                          checked={item.completed}
                          onChanged={(ev, value) =>
                            onCheckBoxChanged(item, value)
                          }
                        />
                        <span
                          className={`${item.completed ? "line-through" : ""}`}
                        >
                          {item.todo}
                        </span>
                      </div>
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <img
                          className="group-hover:block h-[15px] hidden cursor-pointer"
                          src="../../../icon-cross.svg"
                          onClick={() => {
                            let todosCopy = [...todos];
                            setTodos([
                              ...todosCopy.filter((x) => x.id !== item.id),
                            ]);
                          }}
                        />
                      </motion.div>
                    </div>
                  </Reorder.Item>
                ))}
              </AnimatePresence>
            </Reorder.Group>
          ) : (
            <div className="flex h-full justify-center">
              <span className="content-center">No todo items left</span>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          theme === Theme.light
            ? "bg-lightCardBackgroundColor text-lightTextColor border-lightBorderColor"
            : "bg-darkCardBackgroundColor text-darkTextColor border-darkBorderColor"
        }
         w-full h-[30px] text-sm p-[15px] text-lightGrayishBlue rounded-b-md flex flex-row border-t-[1px] justify-between items-center`}
      >
        <div>
          {todos.filter((x) => x.completed === false).length} items left
        </div>
        <div className="flex flex-row">
          {todoFilterOptions.map((x) => (
            <span
              key={x}
              className={`mx-2 ${
                todosFilter === x && "text-brightBlue"
              } cursor-pointer font-bold`}
              onClick={() => setTodoFilter(x)}
            >
              {TodoStatusFilter[x]}
            </span>
          ))}
        </div>
        <div>
          <span
            className="cursor-pointer"
            onClick={() => {
              let todosCopy = [...todos];
              setTodos(todosCopy.filter((x) => !x.completed));
            }}
          >
            Clear Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
