import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["menu"];

  connect() {
    console.log("Connected dropdown controller");
  }

  toggle() {
    event.preventDefault();
    this.menuTarget.classList.toggle("show");
  }
}
