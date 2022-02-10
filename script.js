"use strict";

const btn = document.querySelector("#btn");
const eBtn = document.querySelector("#e_btn");
const input = document.querySelector("#text");
const range = document.querySelector("#range");
const rangeSpan = document.querySelector("#range-span");
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");

const changeSquareColor = function () {
  let color = input.value;
  if (color) {
    input.value = "";
    square.style.backgroundColor = color;
  } else {
    alert("Введите цвет");
  }
};

btn.addEventListener("click", changeSquareColor);

range.addEventListener("input", function () {
  let value = range.value;

  rangeSpan.textContent = value;
  circle.style.width = value + "%";
  circle.style.height = value + "%";
});

eBtn.style.display = "none";

rangeSpan.textContent = range.value;
circle.style.width = range.value + "%";
circle.style.height = range.value + "%";
