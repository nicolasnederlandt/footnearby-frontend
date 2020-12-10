let navBar = document.querySelector("#navBar");
import {getUserSessionData} from "../utils/session.js";
import logo from "../images/logo.png";
import logouser from "../images/user.png";
import { RedirectUrl } from "./Router.js";


// destructuring assignment
const Navbar = () => {
  let navbar;
  let user = getUserSessionData();    
  if (user) {
    if(user.user.admin){
      navbar = `
    <nav class="navbar fixed-top navbar-light bg-white shadow-sm">
      <a class="navbar-brand" href="#" data-uri="/">
        <img id="logotarget" src="${logo}" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">

      </a>
      <div class="rounded-pill btn-group bg-white shadow-sm align-middle" role="group">
        <button type="button" class="btn btn-white" style="font-size:30px"><a href="#" data-toggle="modal" data-target="#add" style="text-decoration: none;" class="text-warning">Add</a></button>
        <button type="button" class="btn btn-white" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
            <a class="text-warning" style="text-decoration: none; font-size:30px">Search</a>
        </button>
        <div class="rounded-pill dropdown-menu" style="width: 200%;">
          <form id="searchform" class="form-inline d-flex justify-content-center md-form form-lg active-cyan active-cyan-2 mt-2 border-0">
            <input id="search" class="form-control w-75" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Search</button>
            </form>
        </div>
      </div>
      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle shadow-sm btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="${logouser}" width="40" height="40" class="d-inline-block align-middle" alt="" loading="lazy">
        </button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
          <a class="dropdown-item" href="#" data-uri="/">Home</a>
          <a class="dropdown-item" href="#" data-uri="/users">List of Users</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" data-uri="/logout">Logout</a>
        </div>
      </div>
    </nav>`;
      } else {
      navbar = `<nav class="navbar fixed-top navbar-light bg-white shadow-sm">
    <a class="navbar-brand" href="#" data-uri="/">
      <img id="logotarget" src="${logo}" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
    </a>
    <div class="rounded-pill btn-group bg-white shadow-sm align-middle" role="group">
    <button type="button" class="btn btn-white" style="font-size:30px"><a href="#" data-toggle="modal" data-target="#add" style="text-decoration: none;" class="text-warning">Add</a></button>
    <button type="button" class="btn btn-white id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
          <a class="text-warning" style="text-decoration: none; font-size:30px">Search</a>
      </button>
      <div class="rounded-pill dropdown-menu">
      <form id="searchform" class="form-inline d-flex justify-content-center md-form form-lg active-cyan active-cyan-2 mt-2">
        <input id="search" class="form-control w-75" type="search" placeholder="Search"
          aria-label="Search">
          <button class="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Search</button>
          </form>
      </div>
    </div>
  <div class="btn-group" role="group">
  <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle shadow-sm btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img src="${logouser}" width="40" height="40" class="d-inline-block align-middle" alt="" loading="lazy">
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
    <a class="dropdown-item" href="#" data-uri="/">Home</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#" data-uri="/logout">Logout</a>
  </div>
  </div>
    </nav>`;
    } 
  }else {
      navbar = `<nav class="navbar fixed-top navbar-light bg-white shadow-sm">
      <a class="navbar-brand" href="#" data-uri="/">
            <img id="logotarget" src="${logo}" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy"  href="#" data-uri="/">
            <span id="sitetitle">FootNearby</span>
      </a>
      <div class="rounded-pill btn-group bg-white shadow-sm align-middle" role="group">
      <button type="button" class="btn btn-white" style="font-size:30px"><a href="#" data-toggle="modal" data-target="#add" style="text-decoration: none;" class="text-warning">Add</a></button>
      <button type="button" class="btn btn-white id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
          <a class="text-warning" style="text-decoration: none; font-size:30px">Search</a>
      </button>
      <div class="rounded-pill dropdown-menu">
      <form id="searchform" class="form-inline d-flex justify-content-center md-form form-lg active-cyan active-cyan-2 mt-2 border-0">
        <input id="search" class="form-control w-75" type="search" placeholder="Search"
          aria-label="Search">
          <button class="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Search</button>
          </form>
      </div>
    </div>
    <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle shadow-sm btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="${logouser}" width="40" height="40" class="d-inline-block align-middle" alt="" loading="lazy">
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#" data-uri="/">Home</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#" data-toggle="modal" data-target="#login">Login</a>
      <a class="dropdown-item" href="#" data-toggle="modal" data-target="#register">Register</a>
    </div>
    </div>
      </nav>`;
  }
  navBar.innerHTML = navbar;
  let searchForm = document.querySelector("#searchform");
  searchForm.addEventListener("submit", onSearch);
  let logotarget = document.querySelector("#logotarget");
  let sitetitle = document.querySelector("#sitetitle");
  sitetitle.innerHTML = sitetitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  let animation = anime.timeline({loop: false})
  .add({
    targets: '#sitetitle .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '#sitetitle .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 500,
    delay: (el, i) => 1000 + 30 * i
  });
  logotarget.addEventListener("mouseover", function() {
    animation.play()});
  
};

const onSearch = (e) => {
  e.preventDefault();
  let search = document.getElementById("search").value;
  RedirectUrl("/", search);
};

export default Navbar;
