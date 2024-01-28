/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
const Darkmode = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt=""
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
};

export default Darkmode;
