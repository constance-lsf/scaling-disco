import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="back-button"
export default class extends Controller {
  connect() {
    console.log("Connected to back-button controller")
  }

  goBack() {
    document.getElementById('backLink').click();
  }
}
