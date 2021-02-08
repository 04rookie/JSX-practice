//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
var yearValue = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>created by Atharva Jadhav</p>
    <p>Copyright {yearValue}</p>
  </div>,
  document.getElementById("root")
);
