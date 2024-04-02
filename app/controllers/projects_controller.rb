class ProjectsController < ApplicationController
  # Vous pouvez avoir une action "index" pour afficher la liste des projets
  # et une action "show" pour afficher les détails d'un projet spécifique.
  def index
    @projects = Project.all

    if params[:skill].present?
      @projects = @projects.where("skill LIKE ?", "%#{params[:skill]}%")
    end

    @skills = @projects.pluck(:skill).map { |s| s.split(', ') }.flatten.uniq
  end
end
