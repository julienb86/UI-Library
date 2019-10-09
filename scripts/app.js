import Tooltip from "./ui/styles/tooltip";
import Dropdown from "./ui/styles/dropdown";
import Tables from "./ui/styles/tabs";
import Snackbars from "./ui/styles/snackbars";
import Modals from "./ui/styles/modals";

const tooltip = new Tooltip(document.querySelector(".tooltip"));

const dropdowns = document.querySelectorAll(".dropdown");

const tables = new Tables(document.querySelector(".tabs"));

const snackbars = new Snackbars();

const modals = new Modals();

tooltip.init();

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

tables.init();

snackbars.init();

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  snackbars.show("Tu m'as cliqué");
});

modals.init();

let btnModal = document.querySelector(".btn_active_modal");
btnModal.addEventListener("click", () => {
  modals.show(
    "title",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eaque odio minus vitae tenetur corporis esse tempore saepe hic laudantium fugiat est, labore magnam, eligendi asperiores ipsum tempora porro praesentium.",
    "Envoyer",
    "Annuler"
  );
});
