import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-story"
export default class extends Controller {
  static targets = ["hiddenText"];

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  toggle() {
    console.log("toggle-story target element:", this.hiddenTextTarget);
    this.hiddenTextTarget.classList.toggle("hidden");
    // this.element.classList.toggle("hidden");
  }
}
