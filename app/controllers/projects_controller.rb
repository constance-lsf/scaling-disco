class ProjectsController < ApplicationController
  # Vous pouvez avoir une action "index" pour afficher la liste des projets
  # et une action "show" pour afficher les détails d'un projet spécifique.
  def index
    @projects = Project.all
  end
end
