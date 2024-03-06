import React, { useEffect, useState } from "react";
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
  const handleForm = (e) => {
    e.preventDefault();
    navigate(`${terminal}`);
    setTerminal("");
    setShow(false);
  };

  const handleChanges = (e) => {
    if (e.target.value === "/") {
      setShow(true);
    } else if (e.target.value === "") {
      setShow(false);
    }
    setTerminal(e.target.value);
  };
  const handleClick = (item) => {
    navigate(`${item}`);
    setTerminal("");
    setShow(false);
  };
  return (
    <>
      <form className="terminal" onSubmit={handleForm} >
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
            {navData.map((item, index) => {
              return (
                <div
                  className="moreInfoItem"
                  key={index}
                  onClick={()=>handleClick(item)}
                >
                  /{item}
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
