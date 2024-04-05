import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="show-skill"
export default class extends Controller {
  static targets = ["description"]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  showDetails(event) {
    event.preventDefault();

    const card = event.currentTarget.closest(".skill-card");
    const description = card.querySelector(".description");
    // description.classList.toggle("hidden");

    console.log(card, description);

    card.classList.toggle("expanded");

    console.log(card.classList.contains("expanded"));

    if (card.classList.contains("expanded")) {
      description.classList.remove("hidden");
    } else {
      description.classList.add("hidden");
    }
  }
}
