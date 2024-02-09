import Checkbox from "../Checkbox/Checkbox";

const TopBar: React.FC = () => {
    return (
        <div className="border-none">
            <div className="flex flex-row items-baseline justify-between gap-3  mb-5" >
                <h1 className="text-white text-[35px] font-bold">T O D O</h1>
                <img className="h-[25px]" src='../../../icon-moon.svg' />
            </div >

            <div className="flex bg-white flex-row gap-3 justify-between mb-5 p-4 rounded-md ">
                <Checkbox />
                <input type="text" className="w-full h-auto focus:outline-none" placeholder="Currently Typing.." />
            </div>
        </div>
    );
}

export default TopBar;