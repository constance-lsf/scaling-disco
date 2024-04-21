import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-exp"
export default class extends Controller {
  static targets = ["exp"];

  connect() {
    console.log("Toggle Exp Controller connected")
  }


  toggle(event) {
    event.preventDefault()

    const targetId = event.currentTarget.dataset.toggleExpTarget;
    const currentExp = document.getElementById(targetId);

    const isActive = currentExp.classList.contains("active");

    const expContents = document.querySelectorAll(".expcontent");
    expContents.forEach((expContent) => {
      expContent.classList.add("hidden");
      expContent.classList.remove("active");
    });

    if (!isActive) {
      currentExp.classList.remove("hidden");
      currentExp.classList.add("active");
    }

    const currentButton = event.currentTarget;
    if (currentButton.classList.contains("active")) {
        currentButton.classList.remove("active");
    } else {
        currentButton.classList.add("active");
    }

    const buttons = document.querySelectorAll(".explink");
    buttons.forEach((button) => {
        if (button !== currentButton) {
            button.classList.remove("active");
        }
    });
  }
}
