/*
const data = [
  {
    name: "Rick",
    location: "London",
  },
];

const primary = document.getElementById("primary");
primary.addEventListener("click", (e) => {
  document.getElementById("secondary").innerHTML = "You betrayed me";

  const el = document.createElement("div");
  el.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerHTML = data[0].name;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = data[0].location;

  cardBody.appendChild(title);
  cardBody.appendChild(cardText);

  el.appendChild(cardBody);

  document.getElementById("here").appendChild(el);
});
*/

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("exampleName").value;
  const email = document.getElementById("exampleInputEmail").value;

  const modalTitle = document.querySelector(".modal-title");
  modalTitle.innerHTML = name;
  const modalInfo = document.querySelector(".modal-body");
  modalInfo.innerHTML = email;
});
