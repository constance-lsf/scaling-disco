class AddPictureAndProjectTypeToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :picture, :string
    add_column :projects, :project_type, :string
  end
end
