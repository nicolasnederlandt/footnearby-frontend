let navBar = document.querySelector("#navBar");
import {getUserSessionData} from "../utils/session.js";
import logo from "../images/logo.png";
import logouser from "../images/user.png";
// destructuring assignment
const Navbar = () => {
  let navbar;
  let user = getUserSessionData();    
  if (user) {
    if(user.admin){`
    <nav class="navbar fixed-top navbar-light bg-white shadow-sm">
  <a class="navbar-brand" href="#" data-uri="/">
    <img src="${logo}" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
  </a>
  <div class="rounded-pill btn-group bg-white shadow-sm align-middle" role="group">
  <a href="#" data-uri="/films/add"><button type="button" class="btn btn-white text-warning" style="font-size:30px">Add</button></a>
  <a href="#" data-uri="/films"><button type="button" class="btn btn-white text-warning" style="font-size:30px" href="#" data-uri="/films">Search</button></a>
</div>
<div class="btn-group" role="group">
<button id="btnGroupDrop1" type="button" class="btn dropdown-toggle shadow-sm btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src="${logouser}" width="40" height="40" class="d-inline-block align-middle" alt="" loading="lazy">
</button>
<div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
  <a class="dropdown-item" href="#" data-uri="/">Home</a>
  <a class="dropdown-item" href="#" data-uri="/users">List of Users</a>
  <a class="dropdown-item" href="#" data-uri="/logout">Logout</a>
</div>
</div>
  </nav>`;
    } else {
    navbar = `<nav class="navbar fixed-top navbar-light bg-white shadow-sm">
  <a class="navbar-brand" href="#" data-uri="/">
    <img src="${logo}" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
  </a>
  <div class="rounded-pill btn-group bg-white shadow-sm align-middle" role="group">
  <a href="#" data-uri="/films/add"><button type="button" class="btn btn-white text-warning" style="font-size:30px">Add</button></a>
  <a href="#" data-uri="/films"><button type="button" class="btn btn-white text-warning" style="font-size:30px" href="#" data-uri="/films">Search</button></a>
</div>
<div class="btn-group" role="group">
<button id="btnGroupDrop1" type="button" class="btn dropdown-toggle shadow-sm btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src="${logouser}" width="40" height="40" class="d-inline-block align-middle" alt="" loading="lazy">
</button>
<div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
  <a class="dropdown-item" href="#" data-uri="/">Home</a>
  <a class="dropdown-item" href="#" data-uri="/logout">Logout</a>
</div>
</div>
  </nav>`;
  } 
}else {
    navbar = `<nav class="navbar fixed-top navbar-light bg-white shadow-sm">
    <a class="navbar-brand" href="#" data-uri="/">
          <img src="${logo}" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
    </a>
    <div class="rounded-pill btn-group bg-white shadow-sm align-middle" role="group">
    <a type="button" class="btn btn-white text-warning"" style="font-size:30px" href="#" data-uri="/films/add">Add</a></button>
    <a type="button" class="btn btn-white text-warning"" style="font-size:30px" href="#" data-uri="/films">Search</a></button>
  </div>
  <div class="btn-group" role="group">
  <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle shadow-sm btn-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img src="${logouser}" width="40" height="40" class="d-inline-block align-middle" alt="" loading="lazy">
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#login">Login</a>
    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#register">Register</a>
  </div>
  </div>
    </nav>`;
  }

  return (navBar.innerHTML = navbar);
};

export default Navbar;
