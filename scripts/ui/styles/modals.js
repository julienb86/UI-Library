import "./modal.css";

class Modals {
  constructor() {
    this.modal = document.createElement("div");
    this.contentContainer = document.createElement("div");
    this.title = document.createElement("h3");
    this.content = document.createElement("p");
    this.confirmButton = document.createElement("button");
    this.cancelButton = document.createElement("button");
    this.closeButton = document.createElement("button");
  }
  init() {
    //add a class to the main container
    this.modal.classList.add("modal");
    this.modal.style.display = "none";

    //add a title, description and buttons
    this.title.classList.add("modal_title");
    this.content.classList.add("modal_content");
    this.contentContainer.classList.add("modal_container");
    this.confirmButton.classList.add("btn");
    this.cancelButton.classList.add("btn");
    this.closeButton.classList.add("close");

    /* append elements */
    document.querySelector("body").appendChild(this.modal);
    this.modal.appendChild(this.contentContainer);
    this.contentContainer.appendChild(this.title);
    this.contentContainer.appendChild(this.content);
    this.contentContainer.appendChild(this.confirmButton);
    this.contentContainer.appendChild(this.cancelButton);
    this.title.appendChild(this.closeButton);
  }
  show(title, content, confirmButton, cancelButton) {
    //add active to class to show the modal
    this.modal.style.display = "block";
    this.title.textContent = title;
    this.content.textContent = content;
    this.confirmButton.textContent = confirmButton;
    this.cancelButton.textContent = cancelButton;
    this.closeButton.textContent = "x";
  }
}

export default Modals;
