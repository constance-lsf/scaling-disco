class AddColumnToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :github_link, :string
    add_column :projects, :web_link, :string
  end
end
