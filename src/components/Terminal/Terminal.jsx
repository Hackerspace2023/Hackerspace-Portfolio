import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/terminal.css";
import { IoSend } from "react-icons/io5";
import { nav } from "../../data";

const Terminal = () => {
  const navigate = useNavigate();
  const [terminal, setTerminal] = useState("");
  const [show, setShow] = useState(false);
  const data = Object.keys(nav);
  const navData = [...data.filter((item) => item !== "error")];
  const updatedNavData = navData.map((item) => `/${item}`);
  const [terminalData, setTerminalData] = useState(updatedNavData);
  const [selectedRoute, setSelectedRoute] = useState("");
  const ref = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    let path = terminal.replace(/^\/|\/$/g, "");
    console.log(path);
    navigate(`/${path}`);
    window.scrollTo(0, 0);
    setTerminal("");
    setShow(false);
  };

  const handleChanges = (e) => {
    if (e.target.value === "/") {
      setShow(true);
    } else if (e.target.value === "") {
      setShow(false);
    }
    const matchNavData = updatedNavData.filter((item) =>
      item.includes(e.target.value)
    );
    if (matchNavData.length > 0) {
      setTerminalData(matchNavData);
    } else {
      setTerminalData(["No match found"]);
    }
    setTerminal(e.target.value);
  };

  const handleClick = (item) => {
    navigate(`${item}`);
    window.scrollTo(0, 0);
    setTerminal("");
    setShow(false);
  };

  return (
    <>
      <form className="terminal" onSubmit={handleForm}>
        <input
          type="text"
          onChange={handleChanges}
          className="input"
          value={terminal}
          placeholder="Tip: press / for more info"
        />
        <button type="submit" className="submit">
          <IoSend />
        </button>
        {show && (
          <div className="moreInfo">
            {terminalData.map((item, index) => {
              return (
                <div
                  className={`moreInfoItem ${selectedRoute === item ? "active" : ""}`}
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </form>
    </>
  );
};

export default Terminal;
