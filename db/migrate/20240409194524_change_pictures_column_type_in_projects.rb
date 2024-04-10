class ChangePicturesColumnTypeInProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :pictures, :text
  end
end
