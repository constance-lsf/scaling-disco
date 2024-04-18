import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab-experience"
export default class extends Controller {
  static targets = ["tab"];

  connect() {
    console.log("Tab Experience Controller connected");
    this.openDefaultTab();
  }

  openDefaultTab() {
    const defaultTab = this.tabTargets[0];
    if (defaultTab) {
      defaultTab.style.display = "block";
      defaultTab.classList.add("active");
    }
  }

  openTab(event) {
    event.preventDefault();
    const tabName = event.target.dataset.tab;
    this.tabTargets.forEach(tab => {
      if (tab.id === tabName) {
        tab.style.display = "block";
        tab.classList.add("active");
        console.log(tab.id);
      } else {
        tab.style.display = "none";
        tab.classList.remove("active");
      }
    });
  }
}
