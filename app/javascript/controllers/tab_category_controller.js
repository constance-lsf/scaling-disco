import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab-category"
export default class extends Controller {
  static targets = ["tab"]

  connect() {
    console.log("Tab Category Controller Connected")
  }

  changeTab(event) {
    event.preventDefault()
    const currentTab = event.currentTarget

    if (currentTab.classList.contains('active')) {
      currentTab.classList.remove('active')
    } else {
      const previousActiveTab = document.querySelector('.li-projects.active')
      if (previousActiveTab) {
        previousActiveTab.classList.remove('active')
      }

      currentTab.classList.add('active')
    }
  }
}
