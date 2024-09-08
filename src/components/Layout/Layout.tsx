import React from "react";
import { Theme, useTheme } from "../../context/ThemeContext/ThemeContext";
import { motion } from "framer-motion";
import moonImage from "../../assets/images/icon-moon.svg";
import sunImage from "../../assets/images/icon-sun.svg";

interface ILayoutProps {
  children?: React.ReactElement;
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`container max-w-full h-screen flex flex-col ${
        theme === Theme.light
          ? "bg-lightBackgroundColor"
          : "bg-darkBackgroundColor"
      }`}
    >
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
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                className="h-[25px]"
                src={theme === Theme.light ? moonImage : sunImage}
                onClick={toggleTheme}
              />
            </motion.div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
