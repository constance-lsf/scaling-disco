class AboutsController < ApplicationController
  # Vous pouvez avoir une action "show" pour afficher les informations sur vous-même ou votre entreprise.

  def show
    @about = About.find(params[:id])
  end
end
