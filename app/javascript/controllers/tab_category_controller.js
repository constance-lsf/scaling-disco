import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tab-category"
export default class extends Controller {
  static targets = ["tab"]

  connect() {
    console.log("Tab Category Controller Connected")
  }

  // changeTab(event) {
  //   event.preventDefault()
  //   console.log("changeTab called", event.currentTarget);

  //   this.tabTargets.forEach(tab => {
  //     console.log("tab", tab);
  //     tab.classList.remove("active")
  //   })
  //   event.currentTarget.classList.add("active")
  // }

  changeTab(event) {
    event.preventDefault()
    const currentTab = event.currentTarget

    // Vérifier si l'élément cliqué est déjà actif
    if (currentTab.classList.contains('active')) {
      // Supprimer la classe "active" sur l'élément cliqué
      currentTab.classList.remove('active')
    } else {
      // Supprimer la classe "active" sur l'élément actif précédent
      const previousActiveTab = document.querySelector('.li-projects.active')
      if (previousActiveTab) {
        previousActiveTab.classList.remove('active')
      }

      // Ajouter la classe "active" sur l'élément cliqué
      currentTab.classList.add('active')
    }
  }
}
