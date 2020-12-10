import { RedirectUrl } from "./Router.js";
import {getUserSessionData} from "../utils/session.js";


let addCourtPage = `
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
            <input
              class="form-control"
              type="text"
              name="title"
              id="title"
              placeholder="Title (ex: Fit-Five Brussels)"
              required
            />
        </div>
        <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="adress"
              id="adress"
              placeholder="Adress (ex: Rue Tielemans 2)"
              required
            />
        </div>
        <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="city"
              id="city"
              placeholder="City (ex: Brussels 1020)"
              required
            />
        </div>
        <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="surface"
              id="surface"
              placeholder="Surface (ex:Synthetic)"
              required
            />
        </div>
        <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="light"
              id="light"
              placeholder="Is it lit ? (Yes/No)"
              required
            />
        </div>
        <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="cover"
              id="cover"
              placeholder="Is it cover ? (Yes/No)"
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

const AddCourtModal = () => {
  let addModal = document.querySelector("#modaladd");
  addModal.innerHTML = addCourtPage;
  let addForm = document.querySelector("#addform");
  addForm.addEventListener("submit", onAddCourt);
};

const onAddCourt = (e) => {
  e.preventDefault();
  let court = {
    title: document.getElementById("title").value,
    adress: document.getElementById("adress").value,
    city: document.getElementById("city").value,
    surface: document.getElementById("surface").value,
    light : document.getElementById("light").value,
    cover : document.getElementById("cover").value,
  };

  const user = getUserSessionData();

  fetch("/api/courts/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(court), // body data type must match "Content-Type" header
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
    .then((data) => onCourtAdded(data))
    .catch((err) => onError(err));
};

const onCourtAdded = (data) => {
  console.log(data);
  // re-render the navbar for the authenticated user  
  RedirectUrl("/courts");
};

const onError = (err) => {
  let errorMessage = err.message;
  RedirectUrl("/error", errorMessage);
};

export default AddCourtModal;