class AddLongDescriptionAndRoleToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :long_description, :text
    add_column :projects, :my_role, :text
  end
end
