import React from "react";
import { useState } from "react";
import "./ColorBox.scss";

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink"; //get initColor first time, not work every reload
    return initColor;
  });

  const getRandomColor = () => {
    const LIST_COLOR = ["deeppink", "black", "white", "yellow", "red", "blue"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return LIST_COLOR[randomIndex];
  };

  const handleChangeColor = () => {
    //get color from random color -> set color = color recieved
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
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
