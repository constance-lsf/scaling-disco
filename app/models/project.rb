class Project < ApplicationRecord
  validates :project_type, inclusion: { in: %w(web mobile) }
end
