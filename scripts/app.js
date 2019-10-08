import Tooltip from "./ui/styles/tooltip";
import Dropdown from "./ui/styles/dropdown";
import Tables from "./ui/styles/tabs";
import Snackbars from "./ui/styles/snackbars";
const tooltip = new Tooltip(document.querySelector(".tooltip"));

const dropdowns = document.querySelectorAll(".dropdown");

const tables = new Tables(document.querySelector(".tabs"));

const snackbars = new Snackbars();

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
