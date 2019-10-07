import Tooltip from "./ui/styles/tooltip";
import Dropdown from "./ui/styles/dropdown";

const tooltip = new Tooltip(document.querySelector(".tooltip"));

const dropdowns = document.querySelectorAll(".dropdown");

tooltip.init();

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
