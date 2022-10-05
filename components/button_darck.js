import React, { useState, useEffect } from "react";

const DarckMode = ({ setChangerTheme }) => {
  let ls = localStorage;
  const [theme, setTheme] = useState(false);

  if (ls.getItem("theme") === null) {
    ls.setItem("theme", "lihgt");
  }

  const btnTheme = () => {
    if (ls.getItem("theme") === "lihgt") {
      setTheme(true);
      ls.setItem("theme", "darck");
      setChangerTheme(true);
    } else {
      setTheme(false);
      ls.setItem("theme", "lihgt");
      setChangerTheme(false);
    }
  };

  useEffect(() => {
    switch (theme) {
      case false:
        document.querySelector(".App").classList.remove("darck");
        break;
      case true:
        document.querySelector(".App").classList.add("darck");

        break;
      default:
        break;
    }
  }, [theme]);

  let botton = "btn-changer-theme";

  return (
    <>
      <button
        className={!theme ? botton : ` darck-elemet  ${botton}`}
        onClick={btnTheme}
      >
        🌙 Darck Mode
      </button>
    </>
  );
};
export default DarckMode;
