import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

ColorBox.propTypes = {};

function ColorBox() {
  const [color, setColor] = useState("deeppink");

  const getRandomColor = () => {
    const LIST_COLOR = ["deeppink", "black", "white", "yellow", "red", "blue"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return LIST_COLOR[randomIndex];
  };

  const handleChangeColor = () => {
    //get color from random color -> set color = color recieved
    const newColor = getRandomColor();
    setColor(newColor);
  };

  return (
    <div
      className="colorBox"
      style={{ backgroundColor: color }}
      onClick={handleChangeColor}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
