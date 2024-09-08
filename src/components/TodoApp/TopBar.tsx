import { uid } from "uid";
import { Theme, useTheme } from "../../context/ThemeContext/ThemeContext";
import { TodoItem } from "../../models/TodoItem";
import Checkbox from "../Checkbox/Checkbox";

interface TopBarProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  todos: TodoItem[];
}

const TopBar: React.FC<TopBarProps> = ({ setTodos, todos }) => {
  const { theme } = useTheme();

  return (
    <div className="border-none">
      <div
        className={`${
          theme === Theme.light
            ? "bg-lightCardBackgroundColor text-lightTextColor"
            : "bg-darkCardBackgroundColor text-darkTextColor"
        } rounded-t-md border-none overflow-hidden flex flex-row gap-3 justify-between mb-5 p-4 rounded-md`}
      >
        <Checkbox />
        <input
          type="text"
          className="w-full bg-transparent h-auto focus:outline-none"
          placeholder="Currently Typing.."
          onKeyUp={(ev) => {
            if (ev.key === "Enter") {
              let todoCopy = [...todos];
              todoCopy.push({
                id: uid(),
                todo: ev.currentTarget.value,
                completed: false,
              });
              setTodos(todoCopy);
              ev.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default TopBar;
