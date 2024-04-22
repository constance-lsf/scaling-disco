import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab-about"
export default class extends Controller {
  static targets = ["tab"];

  connect() {
    console.log("Tab About Controller connected");
    this.openDefaultTab();
  }

  openDefaultTab() {
    const defaultTab = this.tabTargets[0];
    if (defaultTab) {
      defaultTab.style.display = "block";
      defaultTab.classList.add("active");
      this.element.classList.add("flex-container");

      const defaultButton = this.element.querySelector('.tablink');
      if (defaultButton) {
        defaultButton.click();
      }
    }
  }

  openTab(event) {
    event.preventDefault();

    const tabName = event.target.dataset.tab;

    const tabLinks = this.element.querySelectorAll('.tablink');
    tabLinks.forEach(tabLink => tabLink.classList.remove('active'));

    event.target.classList.add('active');

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
    this.element.classList.add("flex-container");
  }
}
