import "./tabs.css";
class Tables {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
    this.content = container.querySelectorAll(".content");
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    this.tabs.forEach(tab => {
      //remove the current active class
      tab.classList.remove("active");
    });
    //add class
    e.target.classList.add("active");
  }
  toggleContent(e) {
    //remove current active class
    this.content.forEach(element => {
      element.classList.remove("active");
    });
    //add new active class
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export default Tables;
