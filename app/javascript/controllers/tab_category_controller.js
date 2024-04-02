import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab-category"
export default class extends Controller {
  static targets = ["tab"]

  connect() {
    console.log("Tab Category Controller Connected")
  }

  changeTab(event) {
    event.preventDefault()
    this.tabTargets.forEach(tab => {
      tab.classList.remove("active")
    })
    event.currentTarget.classList.add("active")
  }
}
