import { setLayout } from "../utils/render";
import { RedirectUrl } from "./Router.js";
import { getUserSessionData } from "../utils/session.js";

let page = document.querySelector("#page");

<<<<<<< HEAD
const HomePage = async () => {
  
  initMap();
=======
const HomePage = async (search) => {
  page.innerHTML = 
  `
    <div id="filmlist" class="col"></div>
    <div id="map" class="col" style="position: fixed; height: 93vh; margin-bottom= 0px;"></div>
  `;
  if(search===undefined){
    setLayout("Home");
    fetch("/api/films", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Error code : " + response.status + " : " + response.statusText
          );
        return response.json();
      })
      .then((data) => onFilmList(data, search))
      .then(() => initMap())
      .catch((err) => onError(err));
  }else{
    setLayout(`Searching for ${search} ...`);
    fetch("/api/films/" + search, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Error code : " + response.status + " : " + response.statusText
          );
        return response.json();
      })
      .then((data) => onFilmList(data))
      .then(() => initMap())
      .catch((err) => onError(err));
  }
};
/******************************************************
 *                COURTS LIST
 *****************************************************/

const onFilmList = (data) => {
  let filmList = document.querySelector("#filmlist");
  if (!data) return;
  let table = `
  <div id="tableFilms" class="col">
      <ul class="list-group list-group-flush">`;
  data.forEach((element) => {
    table += `<li class="list-group-item" data-id="${element.id}">
                <td contenteditable="true">${element.title}</td>
                <td contenteditable="true"><a href="${element.link}" target="_blank">${element.link}</a></td>
                <td contenteditable="true">${element.duration}</td>
                <td contenteditable="true">${element.budget}</td>
              </li>`;
  });

  table += `</tbody>
  </table>`;
  filmList.innerHTML = table;
  
  const saveBtns = document.querySelectorAll(".save");
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", onDelete);
  });

  saveBtns.forEach((saveBtn) => {
    saveBtn.addEventListener("click", onSave);
  });
};

const onSave = (e) => {
  // the id is given in the current table row under data-id attribute
  const filmId = e.target.parentElement.parentElement.dataset.id;
  let film = {};
  const tr = e.target.parentElement.parentElement;
  const cells = tr.querySelectorAll("td");
  film.title = cells[0].innerText;
  film.link = cells[1].innerText;
  film.duration = cells[2].innerText;
  film.budget = cells[3].innerText;
  console.log("Film:", film);
  const user = getUserSessionData();

  fetch("/api/films/" + filmId, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(film), // body data type must match "Content-Type" header
    headers: {
      "Content-Type": "application/json",
      Authorization: user.token,
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "Error code : " + response.status + " : " + response.statusText
        );
      return response.json();
    })
    .then((data) => FilmListPage())
    .catch((err) => onError(err));
>>>>>>> ba80c73442d38d06b3676a338c270bc6136a894c
};

const onDelete = (e) => {
  // the id is given in the current table row under data-id attribute
  const filmId = e.target.parentElement.parentElement.dataset.id;
  const user = getUserSessionData();
  fetch("/api/films/" + filmId, {
    method: "DELETE",
    headers: {
      Authorization: user.token,
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "Error code : " + response.status + " : " + response.statusText
        );
      return response.json();
    })
    .then((data) => FilmListPage())
    .catch((err) => onError(err));
};

const onError = (err) => {
  console.error("UserListPage::onError:", err);
  let errorMessage = "Error";
  if (err.message) {
    errorMessage = err.message;
  }
  RedirectUrl("/error", errorMessage);
};

/********************************************
 *                    MAP
*********************************************/

function initMap(){
  //Map option
  var option = {
      zoom : 12,
      center : {lat:50.8503396,lng:4.3517103},
      mapTypeControl: false,
  }
  //New map
<<<<<<< HEAD
  var map = new google.maps.Map(document.getElementById('map'),option);
=======
  var map = new google.maps.Map(document.querySelector("#map"),option);
>>>>>>> ba80c73442d38d06b3676a338c270bc6136a894c

  //Array of markers
  var markers = [
    {
    coords:{lat:50.8512205, lng:4.3451959},
    content:'DANSAERT'
    },
    {
    coords:{lat:50.840057373046875, lng:4.39126443862915},
    content:'CINQUENTENAIRE'
    }
  ];

 //Loop trought markers
 for(var i=0; i<markers.length; i++){
   addMarker(markers[i]);
 }

  //function add marker
  function addMarker(props){
      var marker = new google.maps.Marker({
          position : props.coords,
          map : map,
          content : props.content
      });
  }
}

export default HomePage;