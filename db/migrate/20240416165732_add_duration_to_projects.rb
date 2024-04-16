class AddDurationToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :duration, :string
  end
end
