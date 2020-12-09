import { RedirectUrl } from "../Router.js";
import { getUserSessionData } from "../../utils/session.js";


let addFilmPage = `
<div class="modal" id="add" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add a playground</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="addform">
        <div class="form-group">
          <label for="title">Enter title</label>
          <input
            class="form-control"
            type="text"
            name="title"
            id="title"
            required
          />
        </div>
        <div class="form-group">
          <label for="duration">Enter duration</label>
          <input
            class="form-control"
            type="number"
            name="duration"
            id="duration"
            required
          />
        </div>
        <div class="form-group">
          <label for="budget">Enter budget</label>
          <input
            class="form-control"
            type="number"
            name="budget"
            id="budget"
            required
          />
        </div>
        <div class="form-group">
          <label for="link">Enter link</label>
          <input
            class="form-control"
            type="text"
            name="link"
            id="link"
            required
          />
        </div>
        <button class="btn btn-lg btn-block btn-success" id="btnadd" type="submit">Add a Playground</button>
        <!-- Create an alert component with bootstrap that is not displayed by default-->
        <div class="alert alert-danger mt-2 d-none" id="messageBoardRegister"></div><span id="errorMessage"></span>
        </form>
        <div class="modal-footer">
        <p></p>
      </div>
    </div>
  </div>
</div>`;

const AddFilmModal = () => {
  let addModal = document.querySelector("#modaladd");
  addModal.innerHTML = addFilmPage;
  let addForm = document.querySelector("#addform");
  addForm.addEventListener("submit", onAddFilm);
};

const onAddFilm = (e) => {
  e.preventDefault();
  let film = {
    title: document.getElementById("title").value,
    duration: document.getElementById("duration").value,
    budget: document.getElementById("budget").value,
    link: document.getElementById("link").value,
  };

  const user = getUserSessionData();

  fetch("/api/films/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
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
    .then((data) => onFilmAdded(data))
    .catch((err) => onError(err));
};

const onFilmAdded = (data) => {
  console.log(data);
  // re-render the navbar for the authenticated user  
  RedirectUrl("/films");
};

const onError = (err) => {
  let errorMessage = err.message;
  RedirectUrl("/error", errorMessage);
};

export default AddFilmModal;
