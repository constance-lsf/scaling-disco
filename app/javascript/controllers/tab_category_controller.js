import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab-category"
export default class extends Controller {
  static targets = ["tab"]

  connect() {
    console.log("Tab Category Controller Connected")
    this.showTab(0)
    console.log(this.tabTargets)
  }

  switch_tab(event) {
    event.preventDefault()
    const index = event.currentTarget.dataset.index
    this.showTab(index)
  }

  showTab(index) {
    this.tabTargets.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    const skills = this.tabTargets[index].textContent.trim();
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
      if (skills === "All" || project.dataset.skills.includes(skills)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  }
}
