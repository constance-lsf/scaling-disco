class ContactsController < ApplicationController
  # Vous pouvez avoir une action "new" pour afficher le formulaire de contact
  # et une action "create" pour traiter les données soumises via le formulaire.
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.save
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
