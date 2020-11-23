"use strict";
let btn1 = document.getElementById("myBtn1");

btn1.onclick = function () {
    btn1.innerText = "You clicked on me : )";
    console.log("btn.onclick::anonymous function");
  };