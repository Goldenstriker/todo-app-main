import React from "react";
import { Theme, useTheme } from "../../context/ThemeContext";

interface ILayoutProps {
  children?: React.ReactElement;
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container max-w-full h-screen flex flex-col">
      <div
        className={`border-none flex h-[30%] bg-no-repeat bg-cover justify-center ${
          theme === Theme.light ? "bg-lightDeskTopImage" : "bg-darkDeskTopImage"
        }`}
      >
        <div className="flex flex-col mt-[6%] w-[50%]">
          <div className="flex flex-row items-baseline justify-between mb-[2%] px-1">
            <h1 className="text-white text-[2rem] tracking-[7px] font-bold">
              TODO
            </h1>
            <img
              className="h-[25px]"
              src={
                theme === Theme.light
                  ? "../../../icon-moon.svg"
                  : "../../../icon-sun.svg"
              }
              onClick={toggleTheme}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
