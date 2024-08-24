import Checkbox from "../Checkbox/Checkbox";

const TopBar: React.FC = () => {
  return (
    <div className="border-none">
      <div className="flex bg-white flex-row gap-3 justify-between mb-5 p-4 rounded-md ">
        <Checkbox />
        <input
          type="text"
          className="w-full h-auto focus:outline-none"
          placeholder="Currently Typing.."
        />
      </div>
    </div>
  );
};

export default TopBar;
