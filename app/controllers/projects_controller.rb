class ProjectsController < ApplicationController
  def index
    @projects = Project.all

    @projects = @projects.where('skill LIKE ?', "%#{params[:skill]}%") if params[:skill].present?

    @skills = @projects.pluck(:skill).map { |s| s.split(', ') }.flatten.uniq
  end

  def show
    @project = Project.find(params[:id])
  end
end
