import "./modal.css";

class Modals {
  constructor() {}
  init() {
    this.modal = document.createElement("div");
    this.contentContainer = document.createElement("div");
    //add a title, description and buttons
    this.titleContainer = document.createElement("div");
    this.title = document.createElement("h3");
    this.content = document.createElement("p");
    this.confirmButton = document.createElement("button");
    this.cancelButton = document.createElement("button");
    this.closeButton = document.createElement("span");
    //add a class to the main container
    this.modal.classList.add("modal");
    this.modal.style.display = "none";

    this.title.classList.add("modal_title");
    this.content.classList.add("modal_content");
    this.contentContainer.classList.add("modal_container");
    this.titleContainer.classList.add("modal_title_container");
    this.confirmButton.classList.add("btn");
    this.cancelButton.classList.add("btn");
    this.closeButton.classList.add("close");
    this.title.appendChild(this.closeButton);
    /* append elements */
    document.querySelector("body").appendChild(this.modal);
    this.modal.appendChild(this.contentContainer);
    this.contentContainer.appendChild(this.titleContainer);
    this.titleContainer.appendChild(this.title);
    this.titleContainer.appendChild(this.closeButton);

    this.contentContainer.appendChild(this.content);
    this.contentContainer.appendChild(this.confirmButton);
    this.contentContainer.appendChild(this.cancelButton);
  }
  show(title, content, confirmButton, cancelButton, spanButton) {
    //add active to class to show the modal
    this.modal.style.display = "block";
    this.title.textContent = title;
    this.content.textContent = content;
    this.confirmButton.textContent = confirmButton;
    this.cancelButton.textContent = cancelButton;
    this.closeButton.textContent = spanButton;
  }
  close() {
    this.closeButton.addEventListener("click", () => {
      this.modal.style.display = "none";
    });
    this.cancelButton.addEventListener("click", () => {
      this.modal.style.display = "none";
    });
  }
}

export default Modals;
