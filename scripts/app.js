import Tooltip from "./ui/styles/tooltip";
import Dropdown from "./ui/styles/dropdown";
import Tables from "./ui/styles/tabs";

const tooltip = new Tooltip(document.querySelector(".tooltip"));

const dropdowns = document.querySelectorAll(".dropdown");

const tables = new Tables(document.querySelector(".tabs"));
tooltip.init();

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

tables.init();
