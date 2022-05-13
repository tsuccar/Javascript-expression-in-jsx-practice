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

const NAME = "Tyrel";
const CURRENTYEAR = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello</h1>
    <p>Created by {NAME}</p>
    <p> Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
